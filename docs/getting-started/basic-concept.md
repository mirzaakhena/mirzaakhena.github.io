# Step by step to start

In this section, our goal is to experiance on how to use and how to works with gogen. As we know, the best learning way is by practising it. We will create a very simple application which use common gogen command that oftenly used.

This is an `justlogin` application that take a message from some source and publish it via the rest api.
The requirement for this `justlogin` application are

```text
user will input username and password via rest api
the system will check the existense of User by checking it into data storage
if the user does not exist, the system will return error message and case closed
if the user exist, then the system will compare the password from data storage and the password from request
if the password is match then system will create a token and return it back into user
```

So Let's start now.

## Create a go mod

In every go project you need to have a `go.mod` file as a dependency manager for your code.

Create your project directory first and change directory into it. In this case, lets name our project with `helloworld`

```shell
$ mkdir justlogin
$ cd my justlogin
```

Create your go mod file by this commands
```shell
$ go mod init justlogin
```

```
$ ls -al

  drwxr-xr-x   3 mir  staff    96 Nov  6 12:39 .
  drwxr-xr-x+ 65 mir  staff  2080 Nov  6 12:39 ..
  -rw-r--r--   1 mir  staff    27 Nov  6 11:04 go.mod
```
your `go.mod` will created under your directory.
And now you are ready to use gogen command.

---

## How to use gogen commands

Gogen works using CLI command. Gogen has many command to help you setup your boiler plate code. You don't have to remember all of it. Each time you forgot what command you should call, you can type this. 

```shell
$ gogen
```
You will see this

```shell
Gogen v0.0.1
Try one of this command to learn how to use it
  gogen domain
  gogen usecase
  gogen entity
  gogen valueobject
  gogen valuestring
  gogen enum
  gogen repository
  gogen service
  gogen test
  gogen gateway
  gogen controller
  gogen error
  gogen application
  gogen crud
```

It will help remind you about which command you should call. In order to learn more detail about what the command can do, you can try run on of command.

---

### gogen domain

Lets try our first command which is `gogen domain`

```shell
$ gogen domain
```

The output is

```shell
  # Initiate gogen project with default input. You may change later under .gogen folder
  gogen domain mydomain
    'mydomain' is a your domain name
```

That output is telling you about how to call the `gogen domain` command. In this case, `gogen domain` has 1 parameter which is a domain name. In above example the domain name is `mydomain`

For our `justlogin` application, we will create a domain with name `userauth`.

```shell
$ gogen domain userauth
```

Now you see some folders and files are created under your `justlogin` project

```shell
$ ls -al

  drwxr-xr-x  11 mir  staff   352 Nov  6 11:27 .
  drwxr-xr-x+ 65 mir  staff  2080 Nov  6 11:27 ..
  -rw-r--r--   1 mir  staff    68 Nov  6 11:27 .gitignore
  drwxr-xr-x   3 mir  staff    96 Nov  6 11:27 .gogen
  -rw-r--r--   1 mir  staff   509 Nov  6 11:27 Dockerfile
  -rw-r--r--   1 mir  staff    14 Nov  6 11:27 README.md
  -rw-r--r--   1 mir  staff   692 Nov  6 11:27 config.json
  -rw-r--r--   1 mir  staff   692 Nov  6 11:27 config.sample.json
  -rw-r--r--   1 mir  staff   662 Nov  6 11:27 docker-compose.yml
  drwxr-xr-x   3 mir  staff    96 Nov  6 11:27 domain_mydomain
  -rw-r--r--   1 mir  staff    27 Nov  6 11:04 go.mod
```

Those files are common file needed for running some application. In this case, gogen prepare it for you.
But we still cannot run anything right now. We need another command.

to learn more about what is domain, you may go to this article details (link will added later)

---

### gogen entity

We will create an entity that contain our helloworld information

try to call
```shell
$ gogen entity
```

The output
```shell
  # Create an entity
  gogen entity Product
    'Product' is an entity name
```

This command has one parameter which is an entity name

Since we want to store an helloworld information we will create entity with name `Message`

```shell
$ gogen entity Message
```

This command will create `domain_mydomain/model/entity/message.go`

```go
package entity

import (
	"helloworld/domain_mydomain/model/vo"
	"time"
)

type Message struct {
	ID      vo.MessageID `bson:"_id" json:"id"`
	Created time.Time    `bson:"created" json:"created"`
	Updated time.Time    `bson:"updated" json:"updated"`

	// edit or add new necessary field here ...
}

type MessageCreateRequest struct {
	RandomString string    `json:"-"`
	Now          time.Time `json:"-"`

	// edit or add new necessary field for create request here ...

}

func (r MessageCreateRequest) Validate() error {

	// validate the create request here ...

	return nil
}

func NewMessage(req MessageCreateRequest) (*Message, error) {

	err := req.Validate()
	if err != nil {
		return nil, err
	}

	id, err := vo.NewMessageID(req.RandomString, req.Now)
	if err != nil {
		return nil, err
	}

	var obj Message
	obj.ID = id
	obj.Created = req.Now
	obj.Updated = req.Now

	// another field input here ...

	return &obj, nil
}

type MessageUpdateRequest struct {
	Now time.Time `json:"-"`

	// add new necessary field to update request here ...

}

func (r MessageUpdateRequest) Validate() error {

	// validate the update request here ...

	return nil
}

func (r *Message) Update(req MessageUpdateRequest) error {

	err := req.Validate()
	if err != nil {
		return err
	}

	r.Updated = req.Now

	// update field here ...

	return nil
}

```

and `domain_mydomain/model/vo/message_id.go`

```go
package vo

import (
	"fmt"
	"time"
)

type MessageID string

func NewMessageID(randomStringID string, now time.Time) (MessageID, error) {  
	var obj = MessageID(fmt.Sprintf("OBJ-%s-%s", now.Format("060102"), randomStringID))

  // you may change it as necessary

	return obj, nil
}

func (r MessageID) String() string {
	return string(r)
}
```

Let add a new field `HelloMessage` into `Message` struct in `domain_mydomain/model/entity/message.go`

```go
type Message struct {
	ID           vo.MessageID `bson:"_id" json:"id"`
	Created      time.Time    `bson:"created" json:"created"`
	Updated      time.Time    `bson:"updated" json:"updated"`
	HelloMessage string       `bson:"hello_message" json:"hello_message"`
}

```
also add a `Message`

```go
type MessageCreateRequest struct {
	RandomString string    `json:"-"`
	Now          time.Time `json:"-"`
	Message      string    `json:"message"`
}

...

func NewMessage(req MessageCreateRequest) (*Message, error) {

	err := req.Validate()
	if err != nil {
		return nil, err
	}

	id, err := vo.NewMessageID(req.RandomString, req.Now)
	if err != nil {
		return nil, err
	}

	var obj Message
	obj.ID = id
	obj.Created = req.Now
	obj.Updated = req.Now
	obj.HelloMessage = req.Message

	return &obj, nil
}

```

### gogen error

In validation part, lets create an error constant with command `gogen error`. Lets try it by call

```shell
$ gogen error
```

The output is
```shell
  # Create an error enum
  gogen error SomethingGoesWrongError
    'SomethingGoesWrongError' is an error constant name
```

Since we don't 

---

### gogen usecase

Lets try our next command which is `gogen usecase`

```shell
$ gogen usecase
```

The output is

```shell
  # Create a new usecase
  gogen usecase RunOrderCreate
    'RunOrderCreate' is an usecase name
```

This `gogen usecase` has one parameter which is the usecase name. This above example the usecase name is `RunOrderCreate`. 
You may wonder why the name of usecase is really weird. That is because we have a conventionfor creating a name. 
We will cover it deeply later in another article.

Since now we want to display a message as json response we will create a usecase with name `GetMessageToDisplay`

```shell
$ gogen usecase GetMessageToDisplay
```

After call `gogen usecase` we got

```shell
domain_mydomain
├── README.md
└── usecase
    └── getmessagetodisplay
        ├── README.md
        ├── inport.go
        ├── interactor.go
        └── outport.go
```

Lets try to take a look at those files.

`domain_mydomain/usecase/getmessagetodisplay/inport.go`
```go
package getmessagetodisplay

import "helloworld/shared/gogen"

type Inport gogen.Inport[InportRequest, InportResponse]

type InportRequest struct {
}

type InportResponse struct {
}
```

Inport is a place to define request and response for running a usecase. 

`domain_mydomain/usecase/getmessagetodisplay/interactor.go`
```go
package getmessagetodisplay

import (
	"context"
)

type getMessageToDisplayInteractor struct {
	outport Outport
}

func NewUsecase(outputPort Outport) Inport {
	return &getMessageToDisplayInteractor{
		outport: outputPort,
	}
}

func (r *getMessageToDisplayInteractor) Execute(ctx context.Context, req InportRequest) (*InportResponse, error) {

	res := &InportResponse{}

	// code your usecase definition here ...
	//!

	return res, nil
}
```

Interactor is a place to define the code logic to run a usecase

`domain_mydomain/usecase/getmessagetodisplay/outport.go`
```go
package getmessagetodisplay

type Outport interface {
}
```

Outport is the place to define function that required by usecase to accessing external system

Lets modify some code. Under `domain_mydomain/usecase/getmessagetodisplay/inport.go` adding some needed field to InportRequest struct

```go
type InportRequest struct {
  Name string
}
```
---

### gogen repository

Now. We want to create a repository to get a message from some external source

try call
```shell
$ gogen repository
```

The output is
```shell
  # Create a repository and inject the template code into interactor file with '//!' flag
  gogen repository SaveOrder Order RunOrderCreate
    'SaveOrder'   is a repository func name
    'Order'       is an entity name
    'RunOrderCreate' is an usecase name

  # Create a repository without inject the template code into usecase
  gogen repository SaveOrder Order
    'SaveOrder' is a repository func name
    'Order'     is an entity name
```

Now you see that we have 2 kind of repository command. For now we will try the first command

```shell
$ gogen repository FindOneMessage Message GetMessageToDisplay
```

This command will create some folders and files like
* `domain_mydomain/model/entity/message.go`
* `domain_mydomain/model/repository/repository.go`
* `domain_mydomain/model/vo/message_id.go`

and also inject some code into
* `domain_mydomain/usecase/getmessagetodisplay/interactor.go`
* `domain_mydomain/usecase/getmessagetodisplay/outport.go`

```shell
├── domain_mydomain
│   ├── README.md
│   ├── model
│   │   ├── entity
│   │   │   └── message.go
│   │   ├── repository
│   │   │   └── repository.go
│   │   └── vo
│   │       └── message_id.go
│   └── usecase
│       └── getmessagetodisplay
│           ├── README.md
│           ├── inport.go
│           ├── interactor.go
│           └── outport.go
```

Lets take a look at the 

`domain_mydomain/model/entity/message.go`
```go
package entity

import (
	"helloworld/domain_mydomain/model/vo"
	"time"
)

type Message struct {
	ID      vo.MessageID `bson:"_id" json:"id"`
	Created time.Time    `bson:"created" json:"created"`
}

type MessageCreateRequest struct {
	RandomString string    `json:"-"`
	Now          time.Time `json:"-"`
}

func (r MessageCreateRequest) Validate() error {

	return nil
}

func NewMessage(req MessageCreateRequest) (*Message, error) {

	err := req.Validate()
	if err != nil {
		return nil, err
	}

	id, err := vo.NewMessageID(req.RandomString, req.Now)
	if err != nil {
		return nil, err
	}

	var obj Message
	obj.ID = id
	obj.Created = req.Now
	// another field input here ...

	return &obj, nil
}

type MessageUpdateRequest struct {
	// add field to update here ...
}

func (r MessageUpdateRequest) Validate() error {

	return nil
}

func (r *Message) Update(req MessageUpdateRequest) error {

	err := req.Validate()
	if err != nil {
		return err
	}

	// update field here ...

	return nil
}

```


But, for now, let pretend you already understand and just see a domain and usecase as a folder and code structure management in our project. Let use our intuition to explore what you already have now and guess what it used to.

Let's summarize what we have done now.

1. Create a specific folder for your project
1. Create a `go.mod` file to start working with golang
1. See all gogen command by call a simple command `gogen`
1. See specific how to use a command by call command `gogen <one of the command>`
1. Create a domain by call a command `gogen domain <your domain name>`
1. Create a usecase by call a command `gogen usecase <your usecase name>`
