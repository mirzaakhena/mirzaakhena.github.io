# How it works

gogen works by using the Abstract Syntax Tree (AST) by reading the existing code as a schema to generate the other one
Some code is depend on the other code in different level
for example, in order to create the gateway implementation,
gogen will read all the outport codem filter only the unexisted method and add it into the gateway files
gogen also support the code injection using the special character

### domain
```text
just create all the basic file and folder needed
```

### entity
```text
create a folder and file [your_domain]/model/entity/[your_entity_name].go

create a folder and file [your_domain]/model/vo/[your_entity_id_name].go

```

### usecase
```text
create a folder [your_domain]/usecase/[your_usecase_name]/
and 4 file 
    inport.go
    interactor.go
    outport.go
    README.md
    
also adjust the package name, usecase name in every generated files
```


### gateway
```text
read the Outport interface in every usecase
    it does not depend on filename
    Outport name can be change in config file (next feature)

read all import in the file

read the method list in the interface

if we met interface composition,
  then go through int that interface by looking into the package

if we directly met the method then
  add it into some list

if the gateway.go file is not exist

read all the method name existed in the gateway

compare it with the method list we already have

add the only unexisted method in the gateway file
```

test
```text
almost as same as gateway 
```

### controller
```text
read the Inport, InportRequest and InportResponse in all usecases
create an handler file for every usecase
create a router file if not exist
read all the existed handler in router
find out the latest line of code in router
compare then add unexisted handler into router
inject the new handler into router based on latest line of code
inject the inportrequest and inportresponse
```


### application
```text
read all the usecase
read all the controller
read all the gateway
read existing application
create application file if not exist
create main.go if not exist
inject the usecase into application file
inject the application into main.go file
```
