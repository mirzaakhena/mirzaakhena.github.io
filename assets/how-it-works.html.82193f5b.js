import{_ as e,o as i,c as n,d as a}from"./app.1755948f.js";const d={},t=a(`<h1 id="how-it-works" tabindex="-1"><a class="header-anchor" href="#how-it-works" aria-hidden="true">#</a> How it works</h1><p>gogen works by using the Abstract Syntax Tree (AST) by reading the existing code as a schema to generate the other one Some code is depend on the other code in different level for example, in order to create the gateway implementation, gogen will read all the outport codem filter only the unexisted method and add it into the gateway files gogen also support the code injection using the special character</p><h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain" aria-hidden="true">#</a> domain</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>just create all the basic file and folder needed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="entity" tabindex="-1"><a class="header-anchor" href="#entity" aria-hidden="true">#</a> entity</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create a folder and file [your_domain]/model/entity/[your_entity_name].go

create a folder and file [your_domain]/model/vo/[your_entity_id_name].go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usecase" tabindex="-1"><a class="header-anchor" href="#usecase" aria-hidden="true">#</a> usecase</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create a folder [your_domain]/usecase/[your_usecase_name]/
and 4 file 
    inport.go
    interactor.go
    outport.go
    README.md
    
also adjust the package name, usecase name in every generated files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gateway" tabindex="-1"><a class="header-anchor" href="#gateway" aria-hidden="true">#</a> gateway</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>read the Outport interface in every usecase
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>test</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>almost as same as gateway 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> controller</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>read the Inport, InportRequest and InportResponse in all usecases
create an handler file for every usecase
create a router file if not exist
read all the existed handler in router
find out the latest line of code in router
compare then add unexisted handler into router
inject the new handler into router based on latest line of code
inject the inportrequest and inportresponse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> application</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>read all the usecase
read all the controller
read all the gateway
read existing application
create application file if not exist
create main.go if not exist
inject the usecase into application file
inject the application into main.go file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),s=[t];function l(r,o){return i(),n("div",null,s)}const v=e(d,[["render",l],["__file","how-it-works.html.vue"]]);export{v as default};
