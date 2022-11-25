import{_ as n,o as s,c as a,d as e}from"./app.1755948f.js";const t={},o=e(`<h1 id="step-by-step-to-start" tabindex="-1"><a class="header-anchor" href="#step-by-step-to-start" aria-hidden="true">#</a> Step by step to start</h1><p>In this section, our goal is to experiance on how to use and how to works with gogen. As we know, the best learning way is by practising it. We will create a very simple application which use common gogen command that oftenly used.</p><p>This is an <code>justlogin</code> application that take a message from some source and publish it via the rest api. The requirement for this <code>justlogin</code> application are</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>assume that some users already registered in the system

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>with gogen, We need 7 step to accomplish this project</p><ol><li>create a domain</li><li>create an entity</li><li>create an usecase</li><li>create a repository or service</li><li>create a gateway</li><li>create a controller</li><li>create an application</li></ol><p>So Let&#39;s start now.</p><h2 id="create-a-go-mod" tabindex="-1"><a class="header-anchor" href="#create-a-go-mod" aria-hidden="true">#</a> Create a go mod</h2><p>In every go project you need to have a <code>go.mod</code> file as a dependency manager for your code. Create a go mod is not part of gogen step.</p><p>Create your project directory first and change directory into it. In this case, lets name our project with <code>justlogin</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> justlogin
$ <span class="token builtin class-name">cd</span> my justlogin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Create your go mod file by this commands</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod init justlogin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ls -al

  drwxr-xr-x   3 mir  staff    96 Nov  6 12:39 .
  drwxr-xr-x+ 65 mir  staff  2080 Nov  6 12:39 ..
  -rw-r--r--   1 mir  staff    27 Nov  6 11:04 go.mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>your <code>go.mod</code> will created under your directory. And now you are ready to use gogen command.</p><hr><h2 id="how-to-use-gogen-commands" tabindex="-1"><a class="header-anchor" href="#how-to-use-gogen-commands" aria-hidden="true">#</a> How to use gogen commands</h2><p>Gogen works using CLI command. Gogen has many command to help you setup your boiler plate code. You don&#39;t have to remember all of it. Each time you forgot what command you should call, you can type this.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You will see this</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Gogen v0.0.1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It will help remind you about which command you should call. In order to learn more detail about what the command can do, you can try run on of command.</p><hr><h3 id="gogen-domain" tabindex="-1"><a class="header-anchor" href="#gogen-domain" aria-hidden="true">#</a> gogen domain</h3><p>Lets try our first command which is <code>gogen domain</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen domain
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output is</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># Initiate gogen project with default input. You may change later under .gogen folder</span>
  gogen domain userauth
    <span class="token string">&#39;userauth&#39;</span> is a your domain name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That output is telling you about how to call the <code>gogen domain</code> command. In this case, <code>gogen domain</code> has 1 parameter which is a domain name. In above example the domain name is <code>userauth</code></p><p>For our <code>justlogin</code> application, we will create a domain with name <code>userauth</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen domain userauth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now you see some folders and files are created under your <code>justlogin</code> project</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ls</span> <span class="token parameter variable">-al</span>

  drwxr-xr-x  <span class="token number">11</span> mir  staff   <span class="token number">352</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 <span class="token builtin class-name">.</span>
  drwxr-xr-x+ <span class="token number">65</span> mir  staff  <span class="token number">2080</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 <span class="token punctuation">..</span>
  -rw-r--r--   <span class="token number">1</span> mir  staff    <span class="token number">68</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 .gitignore
  drwxr-xr-x   <span class="token number">3</span> mir  staff    <span class="token number">96</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 .gogen
  -rw-r--r--   <span class="token number">1</span> mir  staff   <span class="token number">509</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 Dockerfile
  -rw-r--r--   <span class="token number">1</span> mir  staff    <span class="token number">14</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 README.md
  -rw-r--r--   <span class="token number">1</span> mir  staff   <span class="token number">692</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 config.json
  -rw-r--r--   <span class="token number">1</span> mir  staff   <span class="token number">692</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 config.sample.json
  -rw-r--r--   <span class="token number">1</span> mir  staff   <span class="token number">662</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 docker-compose.yml
  drwxr-xr-x   <span class="token number">3</span> mir  staff    <span class="token number">96</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:27 domain_userauth
  -rw-r--r--   <span class="token number">1</span> mir  staff    <span class="token number">27</span> Nov  <span class="token number">6</span> <span class="token number">11</span>:04 go.mod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Those files are common file needed for running some application. In this case, gogen prepare it for you. But we still cannot run anything right now. We need another command.</p><p>to learn more about what is domain, you may go to this article details (link will added later)</p><hr><h3 id="gogen-entity" tabindex="-1"><a class="header-anchor" href="#gogen-entity" aria-hidden="true">#</a> gogen entity</h3><p>The next step is creating an data model for our <code>justlogin</code> apps. In gogen our data model stored in a entity. Let see how to use <code>gogen entity</code> command.</p><p>try to call</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen entity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># Create an entity</span>
  gogen entity Product
    <span class="token string">&#39;Product&#39;</span> is an entity name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This command has one parameter which is an entity name</p><p>Since we want to store our user information, we will create entity with name <code>User</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen entity User
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This command will create this structure</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>domain_userauth
├── README.md
└── model
    ├── entity
    │   └── user.go
    └── vo
        └── user_id.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>domain_userauth/model/entity/user.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> entity

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;justlogin/domain_userauth/model/vo&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID      vo<span class="token punctuation">.</span>UserID <span class="token string">\`bson:&quot;_id&quot; json:&quot;id&quot;\`</span>
	Created time<span class="token punctuation">.</span>Time <span class="token string">\`bson:&quot;created&quot; json:&quot;created&quot;\`</span>
	Updated time<span class="token punctuation">.</span>Time <span class="token string">\`bson:&quot;updated&quot; json:&quot;updated&quot;\`</span>

	<span class="token comment">// edit or add new necessary field here ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> UserCreateRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	RandomString <span class="token builtin">string</span>    <span class="token string">\`json:&quot;-&quot;\`</span>
	Now          time<span class="token punctuation">.</span>Time <span class="token string">\`json:&quot;-&quot;\`</span>

	<span class="token comment">// edit or add new necessary field for create request here ...</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r UserCreateRequest<span class="token punctuation">)</span> <span class="token function">Validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>

	<span class="token comment">// validate the create request here ...</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewUser</span><span class="token punctuation">(</span>req UserCreateRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	err <span class="token operator">:=</span> req<span class="token punctuation">.</span><span class="token function">Validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	id<span class="token punctuation">,</span> err <span class="token operator">:=</span> vo<span class="token punctuation">.</span><span class="token function">NewUserID</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>RandomString<span class="token punctuation">,</span> req<span class="token punctuation">.</span>Now<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">var</span> obj User
	obj<span class="token punctuation">.</span>ID <span class="token operator">=</span> id
	obj<span class="token punctuation">.</span>Created <span class="token operator">=</span> req<span class="token punctuation">.</span>Now
	obj<span class="token punctuation">.</span>Updated <span class="token operator">=</span> req<span class="token punctuation">.</span>Now

	<span class="token comment">// another field input here ...</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>obj<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> UserUpdateRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	Now time<span class="token punctuation">.</span>Time <span class="token string">\`json:&quot;-&quot;\`</span>

	<span class="token comment">// add new necessary field to update request here ...</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r UserUpdateRequest<span class="token punctuation">)</span> <span class="token function">Validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>

	<span class="token comment">// validate the update request here ...</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>User<span class="token punctuation">)</span> <span class="token function">Update</span><span class="token punctuation">(</span>req UserUpdateRequest<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>

	err <span class="token operator">:=</span> req<span class="token punctuation">.</span><span class="token function">Validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> err
	<span class="token punctuation">}</span>

	r<span class="token punctuation">.</span>Updated <span class="token operator">=</span> req<span class="token punctuation">.</span>Now

	<span class="token comment">// update field here ...</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and <code>domain_userauth/model/vo/user_id.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> vo

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserID <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token function">NewUserID</span><span class="token punctuation">(</span>randomStringID <span class="token builtin">string</span><span class="token punctuation">,</span> now time<span class="token punctuation">.</span>Time<span class="token punctuation">)</span> <span class="token punctuation">(</span>UserID<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
	<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token function">UserID</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;OBJ-%s-%s&quot;</span><span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;060102&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> randomStringID<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// you may change it as necessary</span>

	<span class="token keyword">return</span> obj<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r UserID<span class="token punctuation">)</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let add some new fields <code>Email</code>, and <code>Password</code> into <code>User</code> struct in <code>domain_userauth/model/entity/user.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	ID       vo<span class="token punctuation">.</span>UserID <span class="token string">\`bson:&quot;_id&quot; json:&quot;id&quot;\`</span>
	Created  time<span class="token punctuation">.</span>Time <span class="token string">\`bson:&quot;created&quot; json:&quot;created&quot;\`</span>
	Updated  time<span class="token punctuation">.</span>Time <span class="token string">\`bson:&quot;updated&quot; json:&quot;updated&quot;\`</span>
	Email    <span class="token builtin">string</span>    <span class="token string">\`bson:&quot;email&quot; json:&quot;email&quot;\`</span>
	Password <span class="token builtin">string</span>    <span class="token string">\`bson:&quot;password&quot; json:&quot;-&quot;\`</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At the <code>Password</code> field, we use tag <code>json:&quot;-&quot;</code> since we don&#39;t want to expose it.</p><p>Still in <code>domain_userauth/model/entity/user.go</code>, Add new method for checking the password</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>u User<span class="token punctuation">)</span> <span class="token function">PasswordIsCorrect</span><span class="token punctuation">(</span>passwordFromInput <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">bool</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> u<span class="token punctuation">.</span>Password <span class="token operator">==</span> passwordFromInput
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Disclaimers! For now, we are not using any encryption algorithm for the password for sake of simplicity. In real world project we must use the encryption like a brcypt.</p><hr><h3 id="gogen-usecase" tabindex="-1"><a class="header-anchor" href="#gogen-usecase" aria-hidden="true">#</a> gogen usecase</h3><p>Lets try our next command which is <code>gogen usecase</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen usecase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output is</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># Create a new usecase</span>
  gogen usecase RunOrderCreate
    <span class="token string">&#39;RunOrderCreate&#39;</span> is an usecase name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This <code>gogen usecase</code> has one parameter which is the usecase name. This above example the usecase name is <code>RunOrderCreate</code>. You may wonder why the name of usecase is really weird. That is because we have a conventionfor creating a name. We will cover it deeply later in another article.</p><p>Since we want to do the login, we may name it <code>RunUserLogin</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen usecase RunUserLogin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After call <code>gogen usecase</code> we got</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>domain_userauth
└── usecase
    └── runuserlogin
        ├── README.md
        ├── inport.go
        ├── interactor.go
        └── outport.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lets try to take a look at those files.</p><p><code>domain_userauth/usecase/runuserlogin/inport.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> runuserlogin

<span class="token keyword">import</span> <span class="token string">&quot;justlogin/shared/gogen&quot;</span>

<span class="token keyword">type</span> Inport gogen<span class="token punctuation">.</span>Inport<span class="token punctuation">[</span>InportRequest<span class="token punctuation">,</span> InportResponse<span class="token punctuation">]</span>

<span class="token keyword">type</span> InportRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> InportResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inport is a place to define request and response for running a usecase.</p><p><code>domain_userauth/usecase/runuserlogin/interactor.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> runuserlogin

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> runUserLoginInteractor <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	outport Outport
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewUsecase</span><span class="token punctuation">(</span>outputPort Outport<span class="token punctuation">)</span> Inport <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>runUserLoginInteractor<span class="token punctuation">{</span>
		outport<span class="token punctuation">:</span> outputPort<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>runUserLoginInteractor<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req InportRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>InportResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	res <span class="token operator">:=</span> <span class="token operator">&amp;</span>InportResponse<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// code your usecase definition here ...</span>
	<span class="token comment">//!</span>

	<span class="token keyword">return</span> res<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Interactor is a place to define the code logic to run a usecase</p><p><code>domain_userauth/usecase/runuserlogin/outport.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> runuserlogin

<span class="token keyword">type</span> Outport <span class="token keyword">interface</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Outport</code> is the place to define function that required by usecase to accessing external system</p><p>Lets modify some code. Under <code>domain_userauth/usecase/runuserlogin/inport.go</code> adding some needed field to <code>InportRequest</code> and <code>InportResponse</code> struct</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> InportRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Email    <span class="token builtin">string</span>
	Password <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> InportResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Token <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="gogen-repository" tabindex="-1"><a class="header-anchor" href="#gogen-repository" aria-hidden="true">#</a> gogen repository</h3><p>Now. We want to create a repository to find a user by the email from some external source</p><p>try call</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen repository
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output is</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token comment"># Create a repository and inject the template code into interactor file with &#39;//!&#39; flag</span>
  gogen repository SaveOrder Order RunOrderCreate
    <span class="token string">&#39;SaveOrder&#39;</span>   is a repository func name
    <span class="token string">&#39;Order&#39;</span>       is an entity name
    <span class="token string">&#39;RunOrderCreate&#39;</span> is an usecase name

  <span class="token comment"># Create a repository without inject the template code into usecase</span>
  gogen repository SaveOrder Order
    <span class="token string">&#39;SaveOrder&#39;</span> is a repository func name
    <span class="token string">&#39;Order&#39;</span>     is an entity name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you see that we have 2 kind of repository command. For now we will try the first command. The second command actually do the same thing but without code injection into interactor and outport. Lets try the first gogen command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen repository FindOneUserByEmail User RunUserLogin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now we just add new folder repository</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└── domain_userauth
    └── model
        └── repository
            └── repository.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this case, we just create a repository with this specification</p><ol><li>Create the interface with name <code>FindOneUserByEmailRepository</code> which has one method on it with name <code>FindOneUserByEmail</code></li><li>Use the existing entity <code>User</code> (or create the new one if it not exist) in method <code>FindOneUserByEmail</code></li><li>Inject the method in the usecase <code>RunUserLogin</code></li></ol><p>This command create some folders and files like</p><ul><li><code>domain_userauth/model/entity/user.go</code> (if not exist)</li><li><code>domain_userauth/model/repository/repository.go</code> (by append the interface if it never exist)</li><li><code>domain_userauth/model/vo/user_id.go</code> (if not exist)</li></ul><p>and also inject some code into</p><ul><li><code>domain_userauth/usecase/runuserlogin/interactor.go</code></li><li><code>domain_userauth/usecase/runuserlogin/outport.go</code></li></ul><p>Lets take a look at <code>domain_userauth/model/repository/repository.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> repository

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;justlogin/domain_userauth/model/entity&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> FindOneUserByEmailRepo <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> userID <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you open the <code>domain_userauth/usecase/runuserlogin/interactor.go</code> we have new additional code injected to the method <code>Execute</code> with basic template for <code>FindOne</code> method.</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>runUserLoginInteractor<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req InportRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>InportResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	res <span class="token operator">:=</span> <span class="token operator">&amp;</span>InportResponse<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// code your usecase definition here ...</span>

	userObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>outport<span class="token punctuation">.</span><span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;userID&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> userObj <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;object not found&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//!</span>

	<span class="token keyword">return</span> res<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Code injection works by finding the special charachter <code>//!</code> and replace it by proper template</p><p>Also in <code>domain_userauth/usecase/runuserlogin/outport.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> runuserlogin

<span class="token keyword">import</span> <span class="token string">&quot;justlogin/domain_userauth/model/repository&quot;</span>

<span class="token keyword">type</span> Outport <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	repository<span class="token punctuation">.</span>FindOneUserByEmailRepo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here we use interface composition. In other words, now <code>Outport</code> has the method <code>FindOneUserByEmail</code></p><p>Modify the method FindOneUserByEmail by rename the second parameters from <code>userID</code> to <code>email</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> FindOneUserByEmailRepo <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> email <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>in interactor, lets modify some code</p><ul><li>pass the email from <code>InportRequest</code> <code>email</code> field to the method <code>FindOneUserByEmail</code></li><li>call the method <code>PasswordIsCorrect</code> from returned obj for checking the password</li><li>fix the wording on error message to the proper message</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>runUserLoginInteractor<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req InportRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>InportResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	res <span class="token operator">:=</span> <span class="token operator">&amp;</span>InportResponse<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// code your usecase definition here ...</span>

	userObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>outport<span class="token punctuation">.</span><span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> req<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> userObj <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid email or password&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>userObj<span class="token punctuation">.</span><span class="token function">PasswordIsCorrect</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>Password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid email or password&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//!</span>

	<span class="token keyword">return</span> res<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gogen-service" tabindex="-1"><a class="header-anchor" href="#gogen-service" aria-hidden="true">#</a> gogen service</h3><p>Now lets add some service to generate the random unique token. We will use <code>gogen service</code>. Lets try now</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen <span class="token function">service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token comment"># Create a service and inject the template code into interactor file with &#39;//!&#39; flag</span>
	gogen <span class="token function">service</span> PublishMessage RunOrderCreate
		<span class="token string">&#39;PublishMessage&#39;</span> is a <span class="token function">service</span> func name
		<span class="token string">&#39;RunOrderCreate&#39;</span> is an usecase name

	<span class="token comment"># Create a service without inject the template code into usecase</span>
	gogen <span class="token function">service</span> PublishMessage
		<span class="token string">&#39;PublishMessage&#39;</span> is a <span class="token function">service</span> func name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Service is almost similar with repository, But repository is commonly used for accessing data storage like database. Accessing can be like create, update, delete or query the data. But Service is more common purpose. Service commonly used for generate some undeterministic value, call other service, sending the event signal, or do some logic calculation that involve the entity or value object. Service can be an interface or struct. By default, gogen will create the service as interface.</p><p>Let create our service to generate the random unique token using first <code>gogen service</code> command</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen <span class="token function">service</span> GenerateLoginToken RunUserLogin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>We just add new folder service</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└── domain_userauth
    └── model
        └── service
            └── service.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The content of <code>domain_userauth/model/service/service.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> service

<span class="token keyword">import</span> <span class="token string">&quot;context&quot;</span>

<span class="token keyword">type</span> GenerateLoginTokenService <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">GenerateLoginToken</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req GenerateLoginTokenServiceRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>GenerateLoginTokenServiceResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> GenerateLoginTokenServiceRequest <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> GenerateLoginTokenServiceResponse <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and some code is injected in interactor and outport</p><p><code>domain_userauth/usecase/runuserlogin/interactor.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>runUserLoginInteractor<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req InportRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>InportResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	res <span class="token operator">:=</span> <span class="token operator">&amp;</span>InportResponse<span class="token punctuation">{</span><span class="token punctuation">}</span>

	<span class="token comment">// code your usecase definition here ...</span>

	userObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>outport<span class="token punctuation">.</span><span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> req<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> userObj <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid email or password&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>userObj<span class="token punctuation">.</span><span class="token function">PasswordIsCorrect</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>Password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid email or password&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	generateLoginTokenResponse<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>outport<span class="token punctuation">.</span><span class="token function">GenerateLoginToken</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> service<span class="token punctuation">.</span>GenerateLoginTokenServiceRequest<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token boolean">_</span> <span class="token operator">=</span> generateLoginTokenResponse

	<span class="token comment">//!</span>

	<span class="token keyword">return</span> res<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>domain_userauth/usecase/runuserlogin/outport.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> runuserlogin

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;justlogin/domain_userauth/model/repository&quot;</span>
	<span class="token string">&quot;justlogin/domain_userauth/model/service&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> Outport <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	repository<span class="token punctuation">.</span>FindOneUserByEmailRepo
	service<span class="token punctuation">.</span>GenerateLoginTokenService
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can simplify the service since no parameter needed and we just want to return the string as a token. So we can edit the code in <code>domain_userauth/model/service/service.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> service

<span class="token keyword">import</span> <span class="token string">&quot;context&quot;</span>

<span class="token keyword">type</span> GenerateLoginTokenService <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">GenerateLoginToken</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>and also edit the interactor</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>runUserLoginInteractor<span class="token punctuation">)</span> <span class="token function">Execute</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req InportRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>InportResponse<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	res <span class="token operator">:=</span> <span class="token operator">&amp;</span>InportResponse<span class="token punctuation">{</span><span class="token punctuation">}</span>

	userObj<span class="token punctuation">,</span> err <span class="token operator">:=</span> r<span class="token punctuation">.</span>outport<span class="token punctuation">.</span><span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> req<span class="token punctuation">.</span>Email<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> err
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> userObj <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid email or password&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token operator">!</span>userObj<span class="token punctuation">.</span><span class="token function">PasswordIsCorrect</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>Password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> fmt<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;invalid email or password&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	token <span class="token operator">:=</span> r<span class="token punctuation">.</span>outport<span class="token punctuation">.</span><span class="token function">GenerateLoginToken</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>

	res<span class="token punctuation">.</span>Token <span class="token operator">=</span> token

	<span class="token keyword">return</span> res<span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gogen-gateway" tabindex="-1"><a class="header-anchor" href="#gogen-gateway" aria-hidden="true">#</a> gogen gateway</h3><p>As we created before we are using an interface for find a user by email and generate a token. Now we need to implement the interface. We can perform this action by call the <code>gogen gateway</code> command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen gateway
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token comment"># Create a gateway for all usecases with cloverdb sample implementation</span>
	gogen gateway inmemory
		<span class="token string">&#39;inmemory&#39;</span> is a gateway name

	<span class="token comment"># Create a gateway for specific usecase</span>
	gogen gateway inmemory cloverdb
		<span class="token string">&#39;inmemory&#39;</span> is a gateway name
		<span class="token string">&#39;cloverdb&#39;</span> is a sample implementation

	<span class="token comment"># Create a gateway for specific usecase</span>
	gogen gateway inmemory cloverdb CreateOrder
		<span class="token string">&#39;inmemory&#39;</span>    is a gateway name
		<span class="token string">&#39;cloverdb&#39;</span> is a sample implementation
		<span class="token string">&#39;CreateOrder&#39;</span> is an usecase name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are 3 type off command. We are gonna use the first one. In this case we will use simple hardcoded implementation without using any database. So we name it as hardcoded</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen gateway hardcoded
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now we add new folder <code>gateway/hardcoded</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└── domain_userauth
    └── gateway
        └── hardcoded
            └── gateway.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This command produce <code>domain_userauth/gateway/hardcoded/gateway.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> hardcoded

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;justlogin/domain_userauth/model/entity&quot;</span>
	<span class="token string">&quot;justlogin/shared/gogen&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/config&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/logger&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> gateway <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	log     logger<span class="token punctuation">.</span>Logger
	appData gogen<span class="token punctuation">.</span>ApplicationData
	config  <span class="token operator">*</span>config<span class="token punctuation">.</span>Config
<span class="token punctuation">}</span>

<span class="token comment">// NewGateway ...</span>
<span class="token keyword">func</span> <span class="token function">NewGateway</span><span class="token punctuation">(</span>log logger<span class="token punctuation">.</span>Logger<span class="token punctuation">,</span> appData gogen<span class="token punctuation">.</span>ApplicationData<span class="token punctuation">,</span> cfg <span class="token operator">*</span>config<span class="token punctuation">.</span>Config<span class="token punctuation">)</span> <span class="token operator">*</span>gateway <span class="token punctuation">{</span>

	<span class="token keyword">return</span> <span class="token operator">&amp;</span>gateway<span class="token punctuation">{</span>
		log<span class="token punctuation">:</span>     log<span class="token punctuation">,</span>
		appData<span class="token punctuation">:</span> appData<span class="token punctuation">,</span>
		config<span class="token punctuation">:</span>  cfg<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>gateway<span class="token punctuation">)</span> <span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> userID <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;called&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>gateway<span class="token punctuation">)</span> <span class="token function">GenerateLoginToken</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;called&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token string">&quot;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lets implement very simple implementation for both method</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>gateway<span class="token punctuation">)</span> <span class="token function">FindOneUserByEmail</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> userID <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token operator">*</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;called&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> userEmail <span class="token operator">==</span> <span class="token string">&quot;userone@gmail.com&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">{</span>
			ID<span class="token punctuation">:</span>       vo<span class="token punctuation">.</span><span class="token function">UserID</span><span class="token punctuation">(</span><span class="token string">&quot;USR1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Created<span class="token punctuation">:</span>  time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Updated<span class="token punctuation">:</span>  time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Email<span class="token punctuation">:</span>    <span class="token string">&quot;userone@gmail.com&quot;</span><span class="token punctuation">,</span>
			Password<span class="token punctuation">:</span> <span class="token string">&quot;111&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> userEmail <span class="token operator">==</span> <span class="token string">&quot;usertwo@gmail.com&quot;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">&amp;</span>entity<span class="token punctuation">.</span>User<span class="token punctuation">{</span>
			ID<span class="token punctuation">:</span>       vo<span class="token punctuation">.</span><span class="token function">UserID</span><span class="token punctuation">(</span><span class="token string">&quot;USR2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Created<span class="token punctuation">:</span>  time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Updated<span class="token punctuation">:</span>  time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Email<span class="token punctuation">:</span>    <span class="token string">&quot;usertwo@gmail.com&quot;</span><span class="token punctuation">,</span>
			Password<span class="token punctuation">:</span> <span class="token string">&quot;222&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>gateway<span class="token punctuation">)</span> <span class="token function">GenerateLoginToken</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token string">&quot;called&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token string">&quot;ABC123&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gogen-controller" tabindex="-1"><a class="header-anchor" href="#gogen-controller" aria-hidden="true">#</a> gogen controller</h3><p>Now lets create a controller. with gogen we can use <code>gogen controller</code> command.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen controller
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token comment"># Create a controller for all usecases using gin as default web framework</span>
	gogen controller restapi
		<span class="token string">&#39;restapi&#39;</span> is a gateway name

	<span class="token comment"># Create a controller with for all usecases with selected framework</span>
	You may try the other one like <span class="token builtin class-name">:</span> echo, gin, gorilla, nethttp, rabbitmq, rpc, simple
	<span class="token keyword">in</span> this example we use <span class="token string">&#39;echo&#39;</span>
	gogen controller restapi <span class="token builtin class-name">echo</span>
		<span class="token string">&#39;restapi&#39;</span>     is a gateway name
		<span class="token string">&#39;CreateOrder&#39;</span> is an usecase name

	<span class="token comment"># Create a controller with defined web framework and specific usecase</span>
	gogen controller restapi gin CreateOrder
		<span class="token string">&#39;restapi&#39;</span>      is a gateway name
		<span class="token string">&#39;gin&#39;</span>          is a sample webframework.
		<span class="token string">&#39;CreateOrder&#39;</span>  is an usecase name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are 3 types of <code>gogen controller</code> command and we are gonna use the first type of command</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen controller restapi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>it will create the some folder and files</p><ul><li><code>domain_userauth/controller/restapi/handler_runuserlogin.go</code></li><li><code>domain_userauth/controller/restapi/http_runuserlogin.http</code></li><li><code>domain_userauth/controller/restapi/interceptor.go</code></li><li><code>domain_userauth/controller/restapi/router.go</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>└── domain_userauth
    └── controller
        └── restapi
            ├── handler_runuserlogin.go
            ├── http_runuserlogin.http
            ├── interceptor.go
            └── router.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let see how the <code>domain_userauth/controller/restapi/router.go</code> looks like</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> restapi

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;justlogin/shared/gogen&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/config&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/logger&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/token&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> selectedRouter <span class="token operator">=</span> gin<span class="token punctuation">.</span>IRouter

<span class="token keyword">type</span> ginController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token operator">*</span>gogen<span class="token punctuation">.</span>BaseController
	log      logger<span class="token punctuation">.</span>Logger
	cfg      <span class="token operator">*</span>config<span class="token punctuation">.</span>Config
	jwtToken token<span class="token punctuation">.</span>JWTToken
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewGinController</span><span class="token punctuation">(</span>log logger<span class="token punctuation">.</span>Logger<span class="token punctuation">,</span> cfg <span class="token operator">*</span>config<span class="token punctuation">.</span>Config<span class="token punctuation">,</span> tk token<span class="token punctuation">.</span>JWTToken<span class="token punctuation">)</span> gogen<span class="token punctuation">.</span>RegisterRouterHandler<span class="token punctuation">[</span>selectedRouter<span class="token punctuation">]</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>ginController<span class="token punctuation">{</span>
		BaseController<span class="token punctuation">:</span> gogen<span class="token punctuation">.</span><span class="token function">NewBaseController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		log<span class="token punctuation">:</span>            log<span class="token punctuation">,</span>
		cfg<span class="token punctuation">:</span>            cfg<span class="token punctuation">,</span>
		jwtToken<span class="token punctuation">:</span>       tk<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ginController<span class="token punctuation">)</span> <span class="token function">RegisterRouter</span><span class="token punctuation">(</span>router selectedRouter<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	resource <span class="token operator">:=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	resource<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/runuserlogin&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">authorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">runUserLoginHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And <code>domain_userauth/controller/restapi/handler_runuserlogin.go</code> looks like</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> restapi

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;justlogin/domain_userauth/usecase/runuserlogin&quot;</span>
	<span class="token string">&quot;justlogin/shared/gogen&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/logger&quot;</span>
	<span class="token string">&quot;justlogin/shared/model/payload&quot;</span>
	<span class="token string">&quot;justlogin/shared/util&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ginController<span class="token punctuation">)</span> <span class="token function">runUserLoginHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gin<span class="token punctuation">.</span>HandlerFunc <span class="token punctuation">{</span>

	<span class="token keyword">type</span> InportRequest <span class="token operator">=</span> runuserlogin<span class="token punctuation">.</span>InportRequest
	<span class="token keyword">type</span> InportResponse <span class="token operator">=</span> runuserlogin<span class="token punctuation">.</span>InportResponse

	inport <span class="token operator">:=</span> gogen<span class="token punctuation">.</span>GetInport<span class="token punctuation">[</span>InportRequest<span class="token punctuation">,</span> InportResponse<span class="token punctuation">]</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">GetUsecase</span><span class="token punctuation">(</span>InportRequest<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token keyword">type</span> request <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Email    <span class="token builtin">string</span> <span class="token string">\`json:&quot;email&quot;\`</span>
		Password <span class="token builtin">string</span> <span class="token string">\`json:&quot;password&quot;\`</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">type</span> response <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		Token <span class="token builtin">string</span> <span class="token string">\`json:&quot;token&quot;\`</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token keyword">func</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		traceID <span class="token operator">:=</span> util<span class="token punctuation">.</span><span class="token function">GenerateID</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span>

		ctx <span class="token operator">:=</span> logger<span class="token punctuation">.</span><span class="token function">SetTraceID</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> traceID<span class="token punctuation">)</span>

		<span class="token keyword">var</span> jsonReq request
		<span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">BindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>jsonReq<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> payload<span class="token punctuation">.</span><span class="token function">NewErrorResponse</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> traceID<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">var</span> req InportRequest
		req<span class="token punctuation">.</span>Email <span class="token operator">=</span> jsonReq<span class="token punctuation">.</span>Email
		req<span class="token punctuation">.</span>Password <span class="token operator">=</span> jsonReq<span class="token punctuation">.</span>Password

		r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> util<span class="token punctuation">.</span><span class="token function">MustJSON</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">)</span>

		res<span class="token punctuation">,</span> err <span class="token operator">:=</span> inport<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> req<span class="token punctuation">)</span>
		<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusBadRequest<span class="token punctuation">,</span> payload<span class="token punctuation">.</span><span class="token function">NewErrorResponse</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> traceID<span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token keyword">return</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">var</span> jsonRes response
		jsonRes<span class="token punctuation">.</span>Token <span class="token operator">=</span> res<span class="token punctuation">.</span>Token

		r<span class="token punctuation">.</span>log<span class="token punctuation">.</span><span class="token function">Info</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> util<span class="token punctuation">.</span><span class="token function">MustJSON</span><span class="token punctuation">(</span>jsonRes<span class="token punctuation">)</span><span class="token punctuation">)</span>
		c<span class="token punctuation">.</span><span class="token function">JSON</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span> payload<span class="token punctuation">.</span><span class="token function">NewSuccessResponse</span><span class="token punctuation">(</span>jsonRes<span class="token punctuation">,</span> traceID<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lets change the router a little bit from <code>/runuserlogin</code> to be <code>/login</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>ginController<span class="token punctuation">)</span> <span class="token function">RegisterRouter</span><span class="token punctuation">(</span>router selectedRouter<span class="token punctuation">)</span> <span class="token punctuation">{</span>

	resource <span class="token operator">:=</span> router<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token string">&quot;/api/v1&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">authentication</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	resource<span class="token punctuation">.</span><span class="token function">POST</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">authorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> r<span class="token punctuation">.</span><span class="token function">runUserLoginHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gogen-application" tabindex="-1"><a class="header-anchor" href="#gogen-application" aria-hidden="true">#</a> gogen application</h3><p>And the last step is we are creating the application</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>$ gogen application
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token comment"># Create a application for all controller</span>
   gogen application appone
     <span class="token string">&#39;appone&#39;</span>  is an application name

   <span class="token comment"># Create a application for specific controller</span>
   gogen application appone restapi
     <span class="token string">&#39;appone&#39;</span>  is an application name
     <span class="token string">&#39;restapi&#39;</span> is a controller name

   <span class="token comment"># Create a application for specific controller and gateway</span>
   gogen application appone restapi prod
     <span class="token string">&#39;appone&#39;</span>  is an application name
     <span class="token string">&#39;restapi&#39;</span> is a controller name
     <span class="token string">&#39;prod&#39;</span>    is a gateway name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We have 3 type of <code>gogen application</code> command. We are gonna use the first one</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gogen application myapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This create new folder application and main file</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── application
│   └── app_myapp.go
└── main.go

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And now gogen create us <code>application/myapp.go</code> that combine the usecase, gateway and controller together</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> application

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;justlogin/domain_userauth/controller/restapi&quot;</span>
	<span class="token string">&quot;justlogin/domain_userauth/gateway/hardcoded&quot;</span>
	<span class="token string">&quot;justlogin/domain_userauth/usecase/runuserlogin&quot;</span>
	<span class="token string">&quot;justlogin/shared/gogen&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/config&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/logger&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/server&quot;</span>
	<span class="token string">&quot;justlogin/shared/infrastructure/token&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> myapp <span class="token keyword">struct</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewMyapp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> gogen<span class="token punctuation">.</span>Runner <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>myapp<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>myapp<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>

	<span class="token keyword">const</span> appName <span class="token operator">=</span> <span class="token string">&quot;myapp&quot;</span>

	cfg <span class="token operator">:=</span> config<span class="token punctuation">.</span><span class="token function">ReadConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	appData <span class="token operator">:=</span> gogen<span class="token punctuation">.</span><span class="token function">NewApplicationData</span><span class="token punctuation">(</span>appName<span class="token punctuation">)</span>

	log <span class="token operator">:=</span> logger<span class="token punctuation">.</span><span class="token function">NewSimpleJSONLogger</span><span class="token punctuation">(</span>appData<span class="token punctuation">)</span>

	jwtToken <span class="token operator">:=</span> token<span class="token punctuation">.</span><span class="token function">NewJWTToken</span><span class="token punctuation">(</span>cfg<span class="token punctuation">.</span>JWTSecretKey<span class="token punctuation">)</span>

	datasource <span class="token operator">:=</span> hardcoded<span class="token punctuation">.</span><span class="token function">NewGateway</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> appData<span class="token punctuation">,</span> cfg<span class="token punctuation">)</span>

	httpHandler <span class="token operator">:=</span> server<span class="token punctuation">.</span><span class="token function">NewGinHTTPHandler</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> cfg<span class="token punctuation">.</span>Servers<span class="token punctuation">[</span>appName<span class="token punctuation">]</span><span class="token punctuation">.</span>Address<span class="token punctuation">,</span> appData<span class="token punctuation">)</span>

	x <span class="token operator">:=</span> restapi<span class="token punctuation">.</span><span class="token function">NewGinController</span><span class="token punctuation">(</span>log<span class="token punctuation">,</span> cfg<span class="token punctuation">,</span> jwtToken<span class="token punctuation">)</span>
	x<span class="token punctuation">.</span><span class="token function">AddUsecase</span><span class="token punctuation">(</span>
		<span class="token comment">//</span>
		runuserlogin<span class="token punctuation">.</span><span class="token function">NewUsecase</span><span class="token punctuation">(</span>datasource<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span>
	x<span class="token punctuation">.</span><span class="token function">RegisterRouter</span><span class="token punctuation">(</span>httpHandler<span class="token punctuation">.</span>Router<span class="token punctuation">)</span>

	httpHandler<span class="token punctuation">.</span><span class="token function">RunWithGracefullyShutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.go</code></p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;justlogin/application&quot;</span>
	<span class="token string">&quot;justlogin/shared/gogen&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> Version <span class="token operator">=</span> <span class="token string">&quot;0.0.1&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	appMap <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>gogen<span class="token punctuation">.</span>Runner<span class="token punctuation">{</span>
		<span class="token comment">//</span>
		<span class="token string">&quot;myapp&quot;</span><span class="token punctuation">:</span> application<span class="token punctuation">.</span><span class="token function">NewMyapp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	app<span class="token punctuation">,</span> exist <span class="token operator">:=</span> appMap<span class="token punctuation">[</span>flag<span class="token punctuation">.</span><span class="token function">Arg</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
	<span class="token keyword">if</span> <span class="token operator">!</span>exist <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;You may try &#39;go run main.go &lt;app_name&gt;&#39; :&quot;</span><span class="token punctuation">)</span>
		<span class="token keyword">for</span> appName <span class="token operator">:=</span> <span class="token keyword">range</span> appMap <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot; - %s\\n&quot;</span><span class="token punctuation">,</span> appName<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Version %s\\n&quot;</span><span class="token punctuation">,</span> Version<span class="token punctuation">)</span>
	err <span class="token operator">:=</span> app<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For now, nothing need to be updated anymore. Your application is ready. Try to run</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the output is</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>shared/infrastructure/server/http_server_gin.go:7:2: no required module provides package github.com/gin-contrib/cors<span class="token punctuation">;</span> to <span class="token function">add</span> it:
        go get github.com/gin-contrib/cors
domain_userauth/controller/restapi/handler_runuserlogin.go:12:2: no required module provides package github.com/gin-gonic/gin<span class="token punctuation">;</span> to <span class="token function">add</span> it:
        go get github.com/gin-gonic/gin
shared/infrastructure/token/token.go:8:2: no required module provides package github.com/golang-jwt/jwt<span class="token punctuation">;</span> to <span class="token function">add</span> it:
        go get github.com/golang-jwt/jwt
shared/util/id.go:3:8: no required module provides package github.com/matoous/go-nanoid<span class="token punctuation">;</span> to <span class="token function">add</span> it:
        go get github.com/matoous/go-nanoid
shared/gogen/test_scenario.go:7:2: no required module provides package github.com/stretchr/testify/assert<span class="token punctuation">;</span> to <span class="token function">add</span> it:
        go get github.com/stretchr/testify/assert
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is because you need to run <code>go mod tidy</code> to download some go dependency</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then run again</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>you will see the output like this</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>You may try <span class="token string">&#39;go run main.go &lt;app_name&gt;&#39;</span> <span class="token builtin class-name">:</span>
 - myapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>This is because gogen support multiple application in one project. You need call the specific application. In this case, you may try run</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ go run main.go myapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output will be</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Version <span class="token number">0.0</span>.1
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> Creating an Engine instance with the Logger and Recovery middleware already attached.

<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> <span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span> Running <span class="token keyword">in</span> <span class="token string">&quot;debug&quot;</span> mode. Switch to <span class="token string">&quot;release&quot;</span> mode <span class="token keyword">in</span> production.
 - using env:   <span class="token builtin class-name">export</span> <span class="token assign-left variable">GIN_MODE</span><span class="token operator">=</span>release
 - using code:  gin.SetMode<span class="token punctuation">(</span>gin.ReleaseMode<span class="token punctuation">)</span>

<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> GET    /ping                     --<span class="token operator">&gt;</span> justlogin/shared/infrastructure/server.NewGinHTTPHandler.func1 <span class="token punctuation">(</span><span class="token number">3</span> handlers<span class="token punctuation">)</span>
<span class="token punctuation">[</span>GIN-debug<span class="token punctuation">]</span> POST   /api/v1/login      --<span class="token operator">&gt;</span> justlogin/domain_userauth/controller/restapi.<span class="token punctuation">(</span>*ginController<span class="token punctuation">)</span>.runUserLoginHandler.func1 <span class="token punctuation">(</span><span class="token number">6</span> handlers<span class="token punctuation">)</span>
<span class="token punctuation">{</span><span class="token string">&quot;appName&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;myapp&quot;</span>,<span class="token string">&quot;appInstID&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;17IW&quot;</span>,<span class="token string">&quot;start&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2022-11-23 09:50:48&quot;</span>,<span class="token string">&quot;severity&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;INFO&quot;</span>,<span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;0000000000000000 server is running at :8000&quot;</span>,<span class="token string">&quot;location&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;server.(*GracefullyShutdown).RunWithGracefullyShutdown:40&quot;</span>,<span class="token string">&quot;time&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2022-11-23 09:50:48&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now test the API by running the curl or you may use postman</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;email&quot;: &quot;userone@gmail.com&quot;, &quot;password&quot;: &quot;111&quot;}&#39;</span> http://localhost:8000/api/v1/login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>output</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span><span class="token string">&quot;success&quot;</span>:true,<span class="token string">&quot;errorCode&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&quot;</span>,<span class="token string">&quot;errorMessage&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;&quot;</span>,<span class="token string">&quot;data&quot;</span>:<span class="token punctuation">{</span><span class="token string">&quot;token&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;ABC123&quot;</span><span class="token punctuation">}</span>,<span class="token string">&quot;traceId&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;NH1PH1Z02O1IT1YC&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And congratulation your application is running!</p>`,192),i=[o];function p(c,l){return s(),a("div",null,i)}const r=n(t,[["render",p],["__file","basic-concept.html.vue"]]);export{r as default};
