# Step by step to start

In this section, our goal is to experiance on how to use and how to works with gogen. As we know, the best learning way is by practising it. We will create a very simple application which use common gogen command that oftenly used.

This is an `justlogin` application that take a message from some source and publish it via the rest api.
The requirement for this `justlogin` application are

```text
assume that some users already registered in the system

user will input email and password via rest api POST /login

the system will check the existense of User 
by checking the email to data storage

if the email does not exist, 
	the system will return error message and case closed

if the email exist, 
	then the system will compare the password 

if the password does not match 
	the system will return error message and case closed

if the password is match 
	then system will create a token and return it back into user
```

with gogen, We need 7 step to accomplish this project

1. create a domain
1. create an entity
1. create an usecase
1. create a repository or service
1. create a gateway
1. create a controller
1. create an application

So Let's start now.

## Create a go mod

In every go project you need to have a `go.mod` file as a dependency manager for your code. Create a go mod is not part of gogen step.

Create your project directory first and change directory into it. In this case, lets name our project with `justlogin`

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

```text
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
  gogen domain userauth
    'userauth' is a your domain name
```

That output is telling you about how to call the `gogen domain` command. In this case, `gogen domain` has 1 parameter which is a domain name. In above example the domain name is `userauth`

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
  drwxr-xr-x   3 mir  staff    96 Nov  6 11:27 domain_userauth
  -rw-r--r--   1 mir  staff    27 Nov  6 11:04 go.mod
```

Those files are common file needed for running some application. In this case, gogen prepare it for you.
But we still cannot run anything right now. We need another command.

to learn more about what is domain, you may go to this article details (link will added later)

---

### gogen entity

The next step is creating an data model for our `justlogin` apps. In gogen our data model stored in a entity. Let see how to use `gogen entity` command.

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

Since we want to store our user information, we will create entity with name `User`

```shell
$ gogen entity User
```

This command will create this structure

```text
domain_userauth
├── README.md
└── model
    ├── entity
    │   └── user.go
    └── vo
        └── user_id.go
```

`domain_userauth/model/entity/user.go`

```go
package entity

import (
	"justlogin/domain_userauth/model/vo"
	"time"
)

type User struct {
	ID      vo.UserID `bson:"_id" json:"id"`
	Created time.Time `bson:"created" json:"created"`
	Updated time.Time `bson:"updated" json:"updated"`

	// edit or add new necessary field here ...
}

type UserCreateRequest struct {
	RandomString string    `json:"-"`
	Now          time.Time `json:"-"`

	// edit or add new necessary field for create request here ...

}

func (r UserCreateRequest) Validate() error {

	// validate the create request here ...

	return nil
}

func NewUser(req UserCreateRequest) (*User, error) {

	err := req.Validate()
	if err != nil {
		return nil, err
	}

	id, err := vo.NewUserID(req.RandomString, req.Now)
	if err != nil {
		return nil, err
	}

	var obj User
	obj.ID = id
	obj.Created = req.Now
	obj.Updated = req.Now

	// another field input here ...

	return &obj, nil
}

type UserUpdateRequest struct {
	Now time.Time `json:"-"`

	// add new necessary field to update request here ...

}

func (r UserUpdateRequest) Validate() error {

	// validate the update request here ...

	return nil
}

func (r *User) Update(req UserUpdateRequest) error {

	err := req.Validate()
	if err != nil {
		return err
	}

	r.Updated = req.Now

	// update field here ...

	return nil
}

```

and `domain_userauth/model/vo/user_id.go`

```go
package vo

import (
	"fmt"
	"time"
)

type UserID string

func NewUserID(randomStringID string, now time.Time) (UserID, error) {  
	var obj = UserID(fmt.Sprintf("OBJ-%s-%s", now.Format("060102"), randomStringID))

  // you may change it as necessary

	return obj, nil
}

func (r UserID) String() string {
	return string(r)
}
```

Let add some new fields `Email`, and `Password` into `User` struct in `domain_userauth/model/entity/user.go`

```go
type User struct {
	ID       vo.UserID `bson:"_id" json:"id"`
	Created  time.Time `bson:"created" json:"created"`
	Updated  time.Time `bson:"updated" json:"updated"`
	Email    string    `bson:"email" json:"email"`
	Password string    `bson:"password" json:"-"`
}
```

At the `Password` field, we use tag `json:"-"` since we don't want to expose it.

Still in `domain_userauth/model/entity/user.go`, Add new method for checking the password

```go
func (u User) PasswordIsCorrect(passwordFromInput string) bool {
	return u.Password == passwordFromInput
}
```

Disclaimers! For now, we are not using any encryption algorithm for the password for sake of simplicity. In real world project we must use the encryption like a brcypt.

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

Since we want to do the login, we may name it `RunUserLogin`

```shell
$ gogen usecase RunUserLogin
```

After call `gogen usecase` we got

```text
domain_userauth
└── usecase
    └── runuserlogin
        ├── README.md
        ├── inport.go
        ├── interactor.go
        └── outport.go
```

Lets try to take a look at those files.

`domain_userauth/usecase/runuserlogin/inport.go`
```go
package runuserlogin

import "justlogin/shared/gogen"

type Inport gogen.Inport[InportRequest, InportResponse]

type InportRequest struct {
}

type InportResponse struct {
}
```

Inport is a place to define request and response for running a usecase. 

`domain_userauth/usecase/runuserlogin/interactor.go`
```go
package runuserlogin

import (
	"context"
)

type runUserLoginInteractor struct {
	outport Outport
}

func NewUsecase(outputPort Outport) Inport {
	return &runUserLoginInteractor{
		outport: outputPort,
	}
}

func (r *runUserLoginInteractor) Execute(ctx context.Context, req InportRequest) (*InportResponse, error) {

	res := &InportResponse{}

	// code your usecase definition here ...
	//!

	return res, nil
}
```

Interactor is a place to define the code logic to run a usecase

`domain_userauth/usecase/runuserlogin/outport.go`
```go
package runuserlogin

type Outport interface {
}
```

`Outport` is the place to define function that required by usecase to accessing external system

Lets modify some code. Under `domain_userauth/usecase/runuserlogin/inport.go` adding some needed field to `InportRequest` and `InportResponse` struct

```go
type InportRequest struct {
  Email    string
	Password string
}

type InportResponse struct {
  Token string
}
```
---

### gogen repository

Now. We want to create a repository to find a user by the email from some external source

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

Now you see that we have 2 kind of repository command. For now we will try the first command. The second command actually do the same thing but without code injection into interactor and outport. Lets try the first gogen command.

```shell
$ gogen repository FindOneUserByEmail User RunUserLogin
```

Now we just add new folder repository

```text
└── domain_userauth
    └── model
        └── repository
            └── repository.go
```

In this case, we just create a repository with this specification
1. Create the interface with name `FindOneUserByEmailRepository` which has one method on it with name `FindOneUserByEmail`
1. Use the existing entity `User` (or create the new one if it not exist) in method `FindOneUserByEmail`
1. Inject the method in the usecase `RunUserLogin`

This command create some folders and files like
* `domain_userauth/model/entity/user.go` (if not exist)
* `domain_userauth/model/repository/repository.go` (by append the interface if it never exist)
* `domain_userauth/model/vo/user_id.go` (if not exist)

and also inject some code into
* `domain_userauth/usecase/runuserlogin/interactor.go`
* `domain_userauth/usecase/runuserlogin/outport.go`


Lets take a look at `domain_userauth/model/repository/repository.go`

```go
package repository

import (
	"context"
	"justlogin/domain_userauth/model/entity"
)

type FindOneUserByEmailRepo interface {
	FindOneUserByEmail(ctx context.Context, userID string) (*entity.User, error)
}
```

If you open the `domain_userauth/usecase/runuserlogin/interactor.go` we have new additional code injected to the method `Execute` with basic template for `FindOne` method.

```go
func (r *runUserLoginInteractor) Execute(ctx context.Context, req InportRequest) (*InportResponse, error) {

	res := &InportResponse{}

	// code your usecase definition here ...

	userObj, err := r.outport.FindOneUserByEmail(ctx, "userID")
	if err != nil {
		return nil, err
	}
	if userObj == nil {
		return nil, fmt.Errorf("object not found")
	}

	//!

	return res, nil
}
```

Code injection works by finding the special charachter `//!` and replace it by proper template

Also in `domain_userauth/usecase/runuserlogin/outport.go`

```go
package runuserlogin

import "justlogin/domain_userauth/model/repository"

type Outport interface {
	repository.FindOneUserByEmailRepo
}
```

Here we use interface composition. In other words, now `Outport` has the method `FindOneUserByEmail`

Modify the method FindOneUserByEmail by rename the second parameters from `userID` to `email`

```go
type FindOneUserByEmailRepo interface {
	FindOneUserByEmail(ctx context.Context, email string) (*entity.User, error)
}
```

in interactor, lets modify some code 
* pass the email from `InportRequest` `email` field to the method `FindOneUserByEmail`
* call the method `PasswordIsCorrect` from returned obj for checking the password
* fix the wording on error message to the proper message

```go
func (r *runUserLoginInteractor) Execute(ctx context.Context, req InportRequest) (*InportResponse, error) {

	res := &InportResponse{}

	// code your usecase definition here ...

	userObj, err := r.outport.FindOneUserByEmail(ctx, req.Email)
	if err != nil {
		return nil, err
	}

	if userObj == nil {
		return nil, fmt.Errorf("invalid email or password")
	}

	if !userObj.PasswordIsCorrect(req.Password) {
		return nil, fmt.Errorf("invalid email or password")
	}

	//!

	return res, nil
}
```

### gogen service

Now lets add some service to generate the random unique token. We will use `gogen service`. Lets try now

```shell
$ gogen service
```
Output
```shell
	# Create a service and inject the template code into interactor file with '//!' flag
	gogen service PublishMessage RunOrderCreate
		'PublishMessage' is a service func name
		'RunOrderCreate' is an usecase name

	# Create a service without inject the template code into usecase
	gogen service PublishMessage
		'PublishMessage' is a service func name
```

Service is almost similar with repository, But repository is commonly used for accessing data storage like database. Accessing can be like create, update, delete or query the data. But Service is more common purpose. Service commonly used for generate some undeterministic value, call other service, sending the event signal, or do some logic calculation that involve the entity or value object. Service can be an interface or struct. By default, gogen will create the service as interface. 

Let create our service to generate the random unique token using first `gogen service` command

```shell
$ gogen service GenerateLoginToken RunUserLogin
```

We just add new folder service

```text
└── domain_userauth
    └── model
        └── service
            └── service.go
```

The content of `domain_userauth/model/service/service.go`
```go
package service

import "context"

type GenerateLoginTokenService interface {
	GenerateLoginToken(ctx context.Context, req GenerateLoginTokenServiceRequest) (*GenerateLoginTokenServiceResponse, error)
}

type GenerateLoginTokenServiceRequest struct {
}

type GenerateLoginTokenServiceResponse struct {
}
```

and some code is injected in interactor and outport

`domain_userauth/usecase/runuserlogin/interactor.go`
```go
func (r *runUserLoginInteractor) Execute(ctx context.Context, req InportRequest) (*InportResponse, error) {

	res := &InportResponse{}

	// code your usecase definition here ...

	userObj, err := r.outport.FindOneUserByEmail(ctx, req.Email)
	if err != nil {
		return nil, err
	}

	if userObj == nil {
		return nil, fmt.Errorf("invalid email or password")
	}

	if !userObj.PasswordIsCorrect(req.Password) {
		return nil, fmt.Errorf("invalid email or password")
	}

	generateLoginTokenResponse, err := r.outport.GenerateLoginToken(ctx, service.GenerateLoginTokenServiceRequest{})
	if err != nil {
		return nil, err
	}

	_ = generateLoginTokenResponse

	//!

	return res, nil
}
```

`domain_userauth/usecase/runuserlogin/outport.go`
```go
package runuserlogin

import (
	"justlogin/domain_userauth/model/repository"
	"justlogin/domain_userauth/model/service"
)

type Outport interface {
	repository.FindOneUserByEmailRepo
	service.GenerateLoginTokenService
}
```

We can simplify the service since no parameter needed and we just want to return the string as a token. So we can edit the code in `domain_userauth/model/service/service.go`

```go
package service

import "context"

type GenerateLoginTokenService interface {
	GenerateLoginToken(ctx context.Context) string
}
```

and also edit the interactor

```go
func (r *runUserLoginInteractor) Execute(ctx context.Context, req InportRequest) (*InportResponse, error) {

	res := &InportResponse{}

	userObj, err := r.outport.FindOneUserByEmail(ctx, req.Email)
	if err != nil {
		return nil, err
	}

	if userObj == nil {
		return nil, fmt.Errorf("invalid email or password")
	}

	if !userObj.PasswordIsCorrect(req.Password) {
		return nil, fmt.Errorf("invalid email or password")
	}

	token := r.outport.GenerateLoginToken(ctx)

	res.Token = token

	return res, nil
}
```

### gogen gateway

As we created before we are using an interface for find a user by email and generate a token. Now we need to implement the interface. We can perform this action by call the `gogen gateway` command.

```shell
$ gogen gateway
```

The output

```shell
	# Create a gateway for all usecases with cloverdb sample implementation
	gogen gateway inmemory
		'inmemory' is a gateway name

	# Create a gateway for specific usecase
	gogen gateway inmemory cloverdb
		'inmemory' is a gateway name
		'cloverdb' is a sample implementation

	# Create a gateway for specific usecase
	gogen gateway inmemory cloverdb CreateOrder
		'inmemory'    is a gateway name
		'cloverdb' is a sample implementation
		'CreateOrder' is an usecase name
```

There are 3 type off command. We are gonna use the first one. In this case we will use simple hardcoded implementation without using any database. So we name it as hardcoded

```shell
$ gogen gateway hardcoded
```

Now we add new folder `gateway/hardcoded`

```text
└── domain_userauth
    └── gateway
        └── hardcoded
            └── gateway.go
```

This command produce `domain_userauth/gateway/hardcoded/gateway.go`

```go
package hardcoded

import (
	"context"
	"justlogin/domain_userauth/model/entity"
	"justlogin/shared/gogen"
	"justlogin/shared/infrastructure/config"
	"justlogin/shared/infrastructure/logger"
)

type gateway struct {
	log     logger.Logger
	appData gogen.ApplicationData
	config  *config.Config
}

// NewGateway ...
func NewGateway(log logger.Logger, appData gogen.ApplicationData, cfg *config.Config) *gateway {

	return &gateway{
		log:     log,
		appData: appData,
		config:  cfg,
	}
}

func (r *gateway) FindOneUserByEmail(ctx context.Context, userID string) (*entity.User, error) {
	r.log.Info(ctx, "called")

	return nil, nil
}

func (r *gateway) GenerateLoginToken(ctx context.Context) string {
	r.log.Info(ctx, "called")

	return ""
}
```

Lets implement very simple implementation for both method

```go
func (r *gateway) FindOneUserByEmail(ctx context.Context, userID string) (*entity.User, error) {
	r.log.Info(ctx, "called")

	if userEmail == "userone@gmail.com" {
		return &entity.User{
			ID:       vo.UserID("USR1"),
			Created:  time.Now(),
			Updated:  time.Now(),
			Email:    "userone@gmail.com",
			Password: "111",
		}, nil
	}

	if userEmail == "usertwo@gmail.com" {
		return &entity.User{
			ID:       vo.UserID("USR2"),
			Created:  time.Now(),
			Updated:  time.Now(),
			Email:    "usertwo@gmail.com",
			Password: "222",
		}, nil
	}

	return nil, nil
}

func (r *gateway) GenerateLoginToken(ctx context.Context) string {
	r.log.Info(ctx, "called")

	return "ABC123"
}
```

### gogen controller

Now lets create a controller. with gogen we can use `gogen controller` command.

```shell
$ gogen controller
```

Output

```shell
	# Create a controller for all usecases using gin as default web framework
	gogen controller restapi
		'restapi' is a gateway name

	# Create a controller with for all usecases with selected framework
	You may try the other one like : echo, gin, gorilla, nethttp, rabbitmq, rpc, simple
	in this example we use 'echo'
	gogen controller restapi echo
		'restapi'     is a gateway name
		'CreateOrder' is an usecase name

	# Create a controller with defined web framework and specific usecase
	gogen controller restapi gin CreateOrder
		'restapi'      is a gateway name
		'gin'          is a sample webframework.
		'CreateOrder'  is an usecase name
```

There are 3 types of `gogen controller` command and we are gonna use the first type of command

```shell
$ gogen controller restapi
```

it will create the some folder and files 
* `domain_userauth/controller/restapi/handler_runuserlogin.go`
* `domain_userauth/controller/restapi/http_runuserlogin.http`
* `domain_userauth/controller/restapi/interceptor.go`
* `domain_userauth/controller/restapi/router.go`

```text
└── domain_userauth
    └── controller
        └── restapi
            ├── handler_runuserlogin.go
            ├── http_runuserlogin.http
            ├── interceptor.go
            └── router.go
```

Let see how the `domain_userauth/controller/restapi/router.go` looks like

```go
package restapi

import (
	"justlogin/shared/gogen"
	"justlogin/shared/infrastructure/config"
	"justlogin/shared/infrastructure/logger"
	"justlogin/shared/infrastructure/token"

	"github.com/gin-gonic/gin"
)

type selectedRouter = gin.IRouter

type ginController struct {
	*gogen.BaseController
	log      logger.Logger
	cfg      *config.Config
	jwtToken token.JWTToken
}

func NewGinController(log logger.Logger, cfg *config.Config, tk token.JWTToken) gogen.RegisterRouterHandler[selectedRouter] {
	return &ginController{
		BaseController: gogen.NewBaseController(),
		log:            log,
		cfg:            cfg,
		jwtToken:       tk,
	}
}

func (r *ginController) RegisterRouter(router selectedRouter) {

	resource := router.Group("/api/v1", r.authentication())
	resource.POST("/runuserlogin", r.authorization(), r.runUserLoginHandler())

}
```

And `domain_userauth/controller/restapi/handler_runuserlogin.go` looks like

```go
package restapi

import (
	"context"
	"justlogin/domain_userauth/usecase/runuserlogin"
	"justlogin/shared/gogen"
	"justlogin/shared/infrastructure/logger"
	"justlogin/shared/model/payload"
	"justlogin/shared/util"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (r *ginController) runUserLoginHandler() gin.HandlerFunc {

	type InportRequest = runuserlogin.InportRequest
	type InportResponse = runuserlogin.InportResponse

	inport := gogen.GetInport[InportRequest, InportResponse](r.GetUsecase(InportRequest{}))

	type request struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	type response struct {
		Token string `json:"token"`
	}

	return func(c *gin.Context) {

		traceID := util.GenerateID(16)

		ctx := logger.SetTraceID(context.Background(), traceID)

		var jsonReq request
		if err := c.BindJSON(&jsonReq); err != nil {
			r.log.Error(ctx, err.Error())
			c.JSON(http.StatusBadRequest, payload.NewErrorResponse(err, traceID))
			return
		}

		var req InportRequest
		req.Email = jsonReq.Email
		req.Password = jsonReq.Password

		r.log.Info(ctx, util.MustJSON(req))

		res, err := inport.Execute(ctx, req)
		if err != nil {
			r.log.Error(ctx, err.Error())
			c.JSON(http.StatusBadRequest, payload.NewErrorResponse(err, traceID))
			return
		}

		var jsonRes response
		jsonRes.Token = res.Token

		r.log.Info(ctx, util.MustJSON(jsonRes))
		c.JSON(http.StatusOK, payload.NewSuccessResponse(jsonRes, traceID))

	}
}
```

Lets change the router a little bit from `/runuserlogin` to be `/login`
```go
func (r *ginController) RegisterRouter(router selectedRouter) {

	resource := router.Group("/api/v1", r.authentication())
	resource.POST("/login", r.authorization(), r.runUserLoginHandler())

}
```

### gogen application

And the last step is we are creating the application

```go
$ gogen application
```

Output 

```shell
   # Create a application for all controller
   gogen application appone
     'appone'  is an application name

   # Create a application for specific controller
   gogen application appone restapi
     'appone'  is an application name
     'restapi' is a controller name

   # Create a application for specific controller and gateway
   gogen application appone restapi prod
     'appone'  is an application name
     'restapi' is a controller name
     'prod'    is a gateway name
```

We have 3 type of `gogen application` command. We are gonna use the first one

```shell
$ gogen application myapp
```

This create new folder application and main file

```text
├── application
│   └── app_myapp.go
└── main.go

```
And now gogen create us `application/myapp.go` that combine the usecase, gateway and controller together

```go
package application

import (
	"justlogin/domain_userauth/controller/restapi"
	"justlogin/domain_userauth/gateway/hardcoded"
	"justlogin/domain_userauth/usecase/runuserlogin"
	"justlogin/shared/gogen"
	"justlogin/shared/infrastructure/config"
	"justlogin/shared/infrastructure/logger"
	"justlogin/shared/infrastructure/server"
	"justlogin/shared/infrastructure/token"
)

type myapp struct{}

func NewMyapp() gogen.Runner {
	return &myapp{}
}

func (myapp) Run() error {

	const appName = "myapp"

	cfg := config.ReadConfig()

	appData := gogen.NewApplicationData(appName)

	log := logger.NewSimpleJSONLogger(appData)

	jwtToken := token.NewJWTToken(cfg.JWTSecretKey)

	datasource := hardcoded.NewGateway(log, appData, cfg)

	httpHandler := server.NewGinHTTPHandler(log, cfg.Servers[appName].Address, appData)

	x := restapi.NewGinController(log, cfg, jwtToken)
	x.AddUsecase(
		//
		runuserlogin.NewUsecase(datasource),
	)
	x.RegisterRouter(httpHandler.Router)

	httpHandler.RunWithGracefullyShutdown()

	return nil
}

```


`main.go`

```go
package main

import (
	"flag"
	"fmt"
	"justlogin/application"
	"justlogin/shared/gogen"
)

var Version = "0.0.1"

func main() {
	appMap := map[string]gogen.Runner{
		//
		"myapp": application.NewMyapp(),
	}

	flag.Parse()

	app, exist := appMap[flag.Arg(0)]
	if !exist {
		fmt.Println("You may try 'go run main.go <app_name>' :")
		for appName := range appMap {
			fmt.Printf(" - %s\n", appName)
		}
		return
	}

	fmt.Printf("Version %s\n", Version)
	err := app.Run()
	if err != nil {
		return
	}

}

```

For now, nothing need to be updated anymore. Your application is ready. Try to run

```shell
$ go run main.go
```

If the output is

```shell
shared/infrastructure/server/http_server_gin.go:7:2: no required module provides package github.com/gin-contrib/cors; to add it:
        go get github.com/gin-contrib/cors
domain_userauth/controller/restapi/handler_runuserlogin.go:12:2: no required module provides package github.com/gin-gonic/gin; to add it:
        go get github.com/gin-gonic/gin
shared/infrastructure/token/token.go:8:2: no required module provides package github.com/golang-jwt/jwt; to add it:
        go get github.com/golang-jwt/jwt
shared/util/id.go:3:8: no required module provides package github.com/matoous/go-nanoid; to add it:
        go get github.com/matoous/go-nanoid
shared/gogen/test_scenario.go:7:2: no required module provides package github.com/stretchr/testify/assert; to add it:
        go get github.com/stretchr/testify/assert
```

This is because you need to run `go mod tidy` to download some go dependency

```shell
$ go mod tidy
```

Then run again
```shell
$ go run main.go
```

you will see the output like this
```shell
You may try 'go run main.go <app_name>' :
 - myapp
```

This is because gogen support multiple application in one project. You need call the specific application. In this case, you may try run

```shell
$ go run main.go myapp
```

The output will be

```shell
Version 0.0.1
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:   export GIN_MODE=release
 - using code:  gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /ping                     --> justlogin/shared/infrastructure/server.NewGinHTTPHandler.func1 (3 handlers)
[GIN-debug] POST   /api/v1/login      --> justlogin/domain_userauth/controller/restapi.(*ginController).runUserLoginHandler.func1 (6 handlers)
{"appName":"myapp","appInstID":"17IW","start":"2022-11-23 09:50:48","severity":"INFO","message":"0000000000000000 server is running at :8000","location":"server.(*GracefullyShutdown).RunWithGracefullyShutdown:40","time":"2022-11-23 09:50:48"}
```

Now test the API by running the curl or you may use postman

```shell
$ curl -X POST -d '{"email": "userone@gmail.com", "password": "111"}' http://localhost:8000/api/v1/login
```

output
```shell
{"success":true,"errorCode":"","errorMessage":"","data":{"token":"ABC123"},"traceId":"NH1PH1Z02O1IT1YC"}
```

And congratulation your application is running!