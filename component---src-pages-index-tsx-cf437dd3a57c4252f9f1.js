(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{141:function(e,A,a){"use strict";a.r(A);a(157);var t=a(0),l=[{link:"mailto:polvallsrue@gmail.com",icon:"fas fa-2x fa-envelope"},{link:"https://www.linkedin.com/in/polvalls/",icon:"fab fa-2x fa-linkedin"},{link:"https://github.com/pvalls",icon:"fab fa-2x fa-github"},{link:"https://join.skype.com/invite/mA35wwcxwn3Z",icon:"fab fa-2x fa-skype"},{link:"https://www.instagram.com/polvallss/",icon:"fab fa-2x fa-instagram"},{link:"https://open.spotify.com/user/vflicvbu8h32rulbtjotri4if?si=MOZoT42QTsylJTkNxjEQ1Q",icon:"fab fa-2x fa-spotify"}];A.default=function(){return t.createElement("div",{style:{justifyContent:"center"},className:"field is-grouped is-grouped-multiline"},l.map(function(e){return t.createElement("a",{"aria-label":"Links to social media (LinkedIn, Facebook, etc...)",style:{margin:"0rem 0.5rem"},key:e.icon+"-medialink",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"icon is-medium media-link"},t.createElement("i",{className:""+e.icon}))}))}},142:function(e,A,a){"use strict";a.r(A);a(33);var t=a(0),l=a(154),n=a(152),i=function(e){var A=e.title,a=e.issued,l=e.description;return t.createElement("div",{className:"box"},t.createElement("div",{className:"column is-full"},t.createElement("h1",{className:"title is-size-5"},A),t.createElement("h2",{className:"subtitle is-size-6"},a),t.createElement(n.e,{fontSize:"14px",className:"content"},l)))},c=[{id:"DrivingLicence",title:"Driving License (AM, B & A1)",issued:"Dirección General de Tráfico, 2015",description:t.createElement("p",null,"Driving license for saloon cars and motorcycles.")},{id:"CAE",title:"CAE Certificate in Advanced English",issued:"Cambridge College, 2017",description:t.createElement("p",null,"CAE Certificate in Advanced English. Exam taken in Girona. Score:192/210.")},{id:"Git",title:"Version Control with Git",issued:"Atlassian (Coursera, 2019)",description:t.createElement("p",null,"Succesfully completed Atlassian's in-depth course on Git and version control with git.")},{id:"MachineLearning",title:"Machine Learning",issued:"Stanford Univerity (Coursera, 2020)",description:t.createElement("p",null,"Succesfully completed Andrew Ng's course on Machine Learning.")}];A.default=function(){return t.createElement(t.Fragment,null,t.createElement(l.a,{title:"Licenses & Certifications",icon:"fa-certificate"}),c.map(function(e){return t.createElement(i,Object.assign({key:"certification-item-"+e.id},e))}))}},143:function(e,A,a){"use strict";a.r(A);a(33);var t=a(0),l=a(154),n=a(152),i=function(e){var A=e.title,a=e.issued,l=e.description;return t.createElement("div",{className:"box"},t.createElement("div",{className:"column is-full"},t.createElement("h1",{className:"title is-size-5"},A),t.createElement("h2",{className:"subtitle is-size-6"},a),t.createElement(n.e,{fontSize:"14px",className:"content"},l)))},c=[{id:"hacklab_prize",title:"HACKLAB 2019 Entrepreneurship Awards: UPF In Time",issued:"Universitat Pompeu Fabra, 2019",description:t.createElement("p",null,"Second highest award at the Premis Hacklab ceremony organized by the UPF, for the project UPF In Time, a schedules native app connected to the UPF schedule service system. (FrontEnd: React Native. Backend: Python; Scrapy, Flask, MongoDB, Heroku).",t.createElement("a",{href:"https://drive.google.com/open?id=1DyxjS5hNmya0taU7AVAmSHqnJ9ETYq82"}," Award certification."))},{id:"honors_subjects",title:"Honors Distinction in Video and Image Encoding Systems",issued:"Universitat Pompeu Fabra",description:t.createElement("p",null,"Awarded honors for best qualification overall, 9.6")},{id:"nura",title:"3rd place short film at the Manlleu Film Festival",issued:"Malleu Film Festival",description:t.createElement("p",null,"Awarded 3rd place in the regional category for the short film NURA, written, directed, filmed and edited by a team of 5.")}];A.default=function(){return t.createElement(t.Fragment,null,t.createElement(l.a,{title:"Honors / Awards",icon:"fa-award"}),c.map(function(e){return t.createElement(i,Object.assign({key:"honor-item-"+e.id},e))}))}},144:function(e,A,a){"use strict";a.r(A);a(33);var t=a(0),l=a.n(t),n=a(154),i=(a(161),function(e){var A=e.title,a=e.data,t=e.color;return l.a.createElement("div",{className:"column is-half"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-content skills-content"},l.a.createElement("h3",{className:"title is-5"},A),l.a.createElement("div",{className:"content"},a.map(function(e,A){return l.a.createElement("article",{key:e.name+"-"+A,className:"media"},l.a.createElement("div",{className:"media-content"},l.a.createElement("div",{className:"content"},l.a.createElement("p",null,l.a.createElement("strong",null,e.label,":"),l.a.createElement("br",null),l.a.createElement("progress",{className:"progress is-"+t+" is-small",value:e.value,max:"100"})))))})))))}),c=[{title:"Languages",data:[{label:"Spanish",value:100},{label:"Catalan",value:100},{label:"English",value:96},{label:"French",value:26}],color:"info"},{title:"General purpose imperative programming",data:[{label:"Python",value:90},{label:"Java",value:60},{label:"C++",value:45},{label:"C",value:45}],color:"primary"},{title:"Full Stack development and DBMS",data:[{label:"HTML5, CSS",value:85},{label:"JavaScript & Typescript",value:65},{label:"Node.js, React.js, Three.js. Bootstrap, Gatsby",value:65},{label:"REST APIs. Django. MySQL/PostgreSQL. mongoDB. graphDB",value:85}],color:"success"},{title:"General computing, CI/CD",data:[{label:"Bash, Zsh. General Shell scripting (CLI)",value:90},{label:"Git & version control",value:90},{label:"Conda, Tmux, Cron, rsync, ... ",value:90},{label:"Docker, Jenkins, GitHub Actions",value:90}],color:"warning"},{title:"Cloud computing, cloud architecture",data:[{label:"AWS: EC2, Lambda, S3, Aurora RDS, Kinesis, SNS, SQS, ...",value:75},{label:"Google Cloud.",value:45},{label:"Heroku.",value:45},{label:"Microsoft Azure.",value:45}],color:"info"},{title:"Computing and science",data:[{label:"MATLAB/OCTAVE",value:95},{label:"Markdown, LaTeX",value:95},{label:"PureData",value:35},{label:"R",value:35}],color:"dark"},{title:"Operative Systems and platforms",data:[{label:"macOS",value:95},{label:"Windows 10",value:95},{label:"Linux",value:95},{label:"Raspberry and development boards",value:75}],color:"danger"},{title:"Software suits",data:[{label:"Visual Studio Code",value:90},{label:"PyCharm, Xcode, Jupyter Notebooks",value:75},{label:"Adobe CC: Photoshop, LightRoom",value:50},{label:"Apple's FinalCut",value:50}],color:"primary"},{title:"Workflows, project management",data:[{label:"Agile/Scrum methodologies",value:85},{label:"Test Driven Development (TDD), PyTest, TestRail, ...",value:85},{label:"Version Control GUIs: VSCode, GitHub, GitLab, Sourcetree, ...",value:85},{label:"Microsoft Office: Excel, Word, PowerPoint",value:85},{label:"Google: Docs, Sheets, Slides, ...",value:85},{label:"iWork: Numbers, Pages, Keynote.",value:85}],color:"info"}];A.default=function(){return t.createElement(t.Fragment,null,t.createElement(n.a,{title:"Skills",icon:"fa-laptop-code"}),t.createElement("div",{className:"columns is-multiline"},c.map(function(e,A){return t.createElement(i,Object.assign({key:e.title+"-"+A},e))})))}},145:function(e,A,a){"use strict";a.r(A);var t=a(0),l=a(154),n=[{icon:"fas fa-envelope",field:" polvallsrue@gmail.com",link:"mailto:polvallsrue@gmail.com"},{icon:"fab fa-github",field:"/pvalls",link:"https://github.com/pvalls"},{icon:"fab fa-linkedin",field:"/polvalls",link:"https://www.linkedin.com/in/polvalls/"},{icon:"fab fa-hackerrank",field:"/pvalls",link:"https://www.hackerrank.com/pvalls"},{icon:"fab fa-skype",field:"live:polvallsrue",link:"https://join.skype.com/invite/mA35wwcxwn3Z"},{icon:"fab fa-telegram",field:"/pvalls",link:"https://t.me/pvalls"},{icon:"fab fa-instagram",field:"@polvallss",link:"https://www.instagram.com/polvallss/"},{icon:"fab fa-twitter",field:"/polvallss",link:"https://twitter.com/polvallss"},{icon:"fab fa-spotify",field:"Pol Valls",link:"https://open.spotify.com/user/vflicvbu8h32rulbtjotri4if?si=MOZoT42QTsylJTkNxjEQ1Q"},{icon:"fab fa-youtube",field:"/Polvallsrue",link:"https://www.youtube.com/user/Polvallsrue"},{icon:"fab fa-google-play",field:"TV Time App",link:"https://www.tvtime.com/user/17715121/profile?c=shared_profile"},{icon:"fab fa-paypal",field:"/polvalls",link:"https://www.paypal.me/polvalls"},{icon:"fas fa-globe-europe",field:"Based in Barcelona, open to work remote / relocate"}],i=(a(157),function(e){var A=e.data;return t.createElement(t.Fragment,null,A.map(function(e){return t.createElement("div",{key:"contact-"+e.icon},t.createElement("span",null,t.createElement("i",{style:{paddingRight:"1rem"},className:e.icon}),t.createElement("a",{href:e.link,target:"_blank"},e.field)))}))});A.default=function(){return t.createElement(t.Fragment,null,t.createElement(l.a,{title:"Contact",icon:"fa-mobile-alt"}),t.createElement(i,{data:n}))}},146:function(e,A,a){"use strict";a.r(A);a(156),a(161);var t=a(165),l=a(0),n=a.n(l),i=a(141),c=a(4),r=a.n(c),s=(a(32),a(162),n.a.createContext({})),o=function(e){return n.a.createElement(s.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func};var m=a(153),d=a.n(m),u=a(158),E=a(152);A.default=function(e){var A=e.name,a=e.role,n=Object(u.b)({to:{opacity:1,marginTop:"0rem"},from:{opacity:0,marginTop:"1.3rem"}});return l.createElement(o,{query:"1679521898",render:function(e){return l.createElement("div",{id:"section-Header",className:"container has-text-centered"},l.createElement(E.c,{margin:"4rem 0 0 0",className:"column"},l.createElement("div",{className:"columns is-vcentered reverse-column-order"},l.createElement("div",{className:"column"},l.createElement(u.a.h1,{className:"title is-size-1 title-background",style:n},l.createElement("span",{style:{fontWeight:"305"}},"Hi! I'm "),A),l.createElement(u.a.h2,{style:n,className:"subtitle-background subtitle is-size-4 has-text-grey-dark"},a),l.createElement(i.default,null)),l.createElement("div",{className:"column"},l.createElement("figure",{className:"image is-180x180"},l.createElement(d.a,{style:{borderRadius:"290500px"},fixed:e.file.childImageSharp.fixed}))))))},data:t})}},147:function(e,A,a){"use strict";a.r(A);var t=a(164),l=a(0),n=a(154),i=a(163),c=a(153),r=a.n(c),s=[{id:"header",medium:!0,data:"Now"},{id:"item",data:{id:"UPF_DEGREE",headingIcon:"fa-university",period:"June 2015 - July 2019",place:"Barcelona, Spain",iconURL:"UPF_LOGO.png",university:"Universitat Pompeu Fabra (UPF)",GPA:"7.75 / 10",degree:"Audiovisual Telecommunication Systems Engineering Degree (Computer Sciences)",specialization:[l.createElement("div",{key:"spec-degree-1"},l.createElement("b",null,"Pattern Recognittion.")," (AI, machine learning, statistics)"),l.createElement("div",{key:"spec-degree-2"},l.createElement("b",null,"Image Analysis and Interpretation.")),l.createElement("div",{key:"spec-degree-3"},l.createElement("b",null,"Synthetic Image.")," (Computer Graphics, ray-tracing)"),l.createElement("div",{key:"spec-degree-4"},l.createElement("b",null,"Advanced Visualisation.")," (Graphics, shaders, OpenGL)"),l.createElement("div",{key:"spec-degree-4"},l.createElement("b",null,"Virtual Communication Environments.")," (Development of Full stack web applications)"),l.createElement("div",{key:"spec-degree-4"},l.createElement("b",null,"Perceptual Principles Applied to Design."))],courses:[l.createElement("div",{key:"spec-course-1"},l.createElement("b",null,"Fundamentals of Computer Sciences"),". Computational Logic, Databases, Object-Oriented Programming."),l.createElement("div",{key:"spec-course-3"},l.createElement("b",null,"Fundamental of Mathemathics and Physics"),". Calculus & Numeric Methods, Linear Algebra and Discrete Mathematics, Waves and Electromagnetism, Differential Equations, Statistics & Stochastic Processes"),l.createElement("div",{key:"spec-course-3"},l.createElement("b",null,"Fundamental on telecommunications"),". Networks and Service protocols. Data Transmission and Encoding. "),l.createElement("div",{key:"spec-course-2"},l.createElement("b",null,"Sound and Image Processing courses."),"Sound and Music Processing, Voice & Audio Encoding Systems,  Image and Video Encoding Systems, Video Processing. ")],additional_content:function(e){return l.createElement("div",{className:"columns"},l.createElement("div",{className:"column is-half no-padding"},l.createElement("figure",{className:"image"},l.createElement(r.a,{fluid:e.UPF_DEGREE_1.childImageSharp.fluid}),l.createElement("figcaption",null,"We were pretty happy when graduating."))),l.createElement("div",{className:"column is-half no-padding"},l.createElement("figure",{className:"image"},l.createElement(r.a,{fluid:e.UPF_DEGREE_2.childImageSharp.fluid}),l.createElement("figcaption",null,"Best promotion ever."))))}}},{id:"header",medium:!0,data:"2015"},{id:"item",data:{id:"IBACCALAUREATE",headingIcon:"fa-school",period:"September 2013 - June 2015",place:"Girona, Spain",iconURL:"IB.jpg",university:"INS Jaume Vicens Vives",GPA:"8 / 10",degree:"International Baccalaureate Diploma (+ spanish baccalaureate)",specialization:[l.createElement("div",{key:"spec-rmit-1"},"2nd highest level baccalaureate class in Catalonia. Sciences specialization with high level mathematics, physics, chemistry as well as philosophy and catalan language.")],courses:[l.createElement("div",{key:"course-rmit-1"},"IB Diploma subjects."),l.createElement("div",{key:"course-rmit-2"},"Spanish Baccalaureate subjects. (LOE).")],additional_content:function(e){return l.createElement("div",{className:"tile is-ancestor"},l.createElement("div",{className:"tile is-parent is-12"},l.createElement("div",{className:"tile is-6 is-vertical"},l.createElement("figure",{className:"image"},l.createElement(r.a,{fluid:e.IBACCALAUREATE_2.childImageSharp.fluid}),l.createElement("figcaption",null,"The class."))),l.createElement("div",{className:"tile is-parent is-5 is-vertical"},l.createElement("div",{className:"tile"},l.createElement("figure",{className:"image"},l.createElement(r.a,{fluid:e.IBACCALAUREATE_1.childImageSharp.fluid}),l.createElement("figcaption",null,"We also had some time to travel to Bamberg, Germany."))))))}}},{id:"header",medium:!0,data:"2013"}];A.default=function(){var e=t.data;return l.createElement(l.Fragment,null,l.createElement(n.a,{title:"Education",icon:"fa-book"}),l.createElement(i.a,{itemType:"education",data:s,images:e}))}},151:function(e,A,a){"use strict";a.r(A);var t=a(0),l=a.n(t),n=a(146),i=a(176),c=a(152),r=a(148),s=a(147),o=a(144),m=a(143),d=a(142),u=a(145),E={particles:{number:{value:80,density:{enable:!0,value_area:750}},color:{value:"#787878"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#787878",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0},f=function(){return t.createElement("footer",{className:"footer"},t.createElement("div",{className:"content"},t.createElement("p",null)))},p=["Header","Experience","Education","Skills","Honors / Awards","Contact"],g=function(){return t.createElement("div",{className:"breadcrumb is-centered has-bullet-separator"},t.createElement("ul",{className:"is-size-6"},p.map(function(e){return t.createElement("li",{key:"sidebar-"+e},t.createElement("a",{onClick:function(){return window.scrollBy({top:document.getElementById("Header"===e?"main":"section-"+e).getBoundingClientRect().top-45,behavior:"smooth"})},className:"media-link"},e))})))},b=a(184),h=a.n(b);a(185),A.default=function(){return l.a.createElement("section",{className:"hero is-default is-bold",id:"main"},l.a.createElement(i.Helmet,null,l.a.createElement("html",{lang:"en"}),l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Hi, I'm Pol Valls"),l.a.createElement("meta",{name:"description",content:"Personal Website of Pol Valls"})),l.a.createElement(c.b,null,l.a.createElement(h.a,{params:E,style:{position:"fixed"}}),l.a.createElement(n.default,{name:"Pol Valls",role:"Software Developer. Audiovisual telecommunication systems engineer."})),l.a.createElement(c.a,null,l.a.createElement("div",{className:"column is-two-thirds is-offset-2"},l.a.createElement(g,null),l.a.createElement(r.default,null),l.a.createElement(s.default,null),l.a.createElement(o.default,null),l.a.createElement(m.default,null),l.a.createElement(d.default,null),l.a.createElement(u.default,null))),l.a.createElement(f,null))}},162:function(e,A,a){var t;e.exports=(t=a(166))&&t.default||t},164:function(e){e.exports={data:{UPF_DEGREE_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQ4y7WTW0sCQRTH/Zp9gojoJSIvGSXoekm6aRlBhAgVEoIPFSEIET0K0YMPGllkNjPrrpaX3XV2ZjvrQ6g4+pANf5Y5c/Y3/7OzZxzWH4ZjprDJLCYUh+ysnTm3Hz2KnEHkDGFvFK9tDWk9ilYCcjghhE1F/VhwUSTTTzKkGqak3nur1ha93DAEcF3FnshvODIAgxK4Loah7H5oDa6zdqdxcgH+UDzT9PEwJQrx7bZz91+X143TtFZ4UuPJ1lW+mcqox2fwAmwtdKa4LgcPm+kM8kjV+eXWTV6JJwGTI0faY9GGXSExLCtkY9sovcj+mJpINc+zxL/fur37zuY6DwW9WMabO6yrTflmzuwQqjVKFThn4O1FTUfu0OQDk2DOqWnLNK3+xM5yDp7IHZ4Ir0oTfhVkhTDrdN/nlrBvjwRixD8s6QB5o9Akg/uO9ja0l1GuGM+vY1SumErj/64kY1M0K+cfjAMpOECaxqwAAAAASUVORK5CYII=",width:96,height:91,src:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png",srcSet:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png 1x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/697ba/UPF_LOGO.png 1.5x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/265b6/UPF_LOGO.png 2x"}}},UPF_DEGREE_1:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAECAP/aAAwDAQACEAMQAAABuxVYCtdXDkyFxtjb/8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIAAwQSExExM//aAAgBAQABBQLYeV7zhuG2tVbMISJR9Z//xAAWEQEBAQAAAAAAAAAAAAAAAAAhABD/2gAIAQMBAT8BI3//xAAWEQADAAAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8BK//EAB0QAAMAAQUBAAAAAAAAAAAAAAABETECEBIhYaH/2gAIAQEABj8CjK+/DHw5YKV6oMW3/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFBUWH/2gAIAQEAAT8hawGUodZRI9isw8DGxnLr7mIM5810E+b6/HC1x1v/2gAMAwEAAgADAAAAEFsoPv/EABkRAQACAwAAAAAAAAAAAAAAAAEAEBExQf/aAAgBAwEBPxAOpgw3X//EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQIBAT8QxsT/xAAdEAEAAgMBAAMAAAAAAAAAAAABABEhMUFRkbHR/9oACAEBAAE/EHAsU6wfteRgkyLdPK+o1C66JmhtUOhrL3EuFvkbzCuVFC6uDnsUMIoEFQfQmqf/2Q==",aspectRatio:1.0349907918968693,src:"/static/b924886b3c30027e372f3de4b05f4186/cd1da/upf-1.jpg",srcSet:"/static/b924886b3c30027e372f3de4b05f4186/2404a/upf-1.jpg 200w,\n/static/b924886b3c30027e372f3de4b05f4186/bc670/upf-1.jpg 400w,\n/static/b924886b3c30027e372f3de4b05f4186/cd1da/upf-1.jpg 562w",sizes:"(max-width: 562px) 100vw, 562px"}}},UPF_DEGREE_2:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAATABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAECBAMF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAGKTnN6Xmk01B5Cv//EABsQAAICAwEAAAAAAAAAAAAAAAACAREDEhMh/9oACAEBAAEFAu3kZNTrQiqyZHW9yVgZYvWD/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQMBAT8BdGT/AP/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABsQAAICAwEAAAAAAAAAAAAAAAABESEQMTJR/9oACAEBAAY/AuT1FolOxQakWf/EABwQAQADAAMBAQAAAAAAAAAAAAEAETEhUYFBYf/aAAgBAQABPyG7R9XE4PvsS6QfyV+g7yA0prNPZLfCDHGxD5P/2gAMAwEAAgADAAAAEMgYQv/EABgRAQEBAQEAAAAAAAAAAAAAAAEAETFB/9oACAEDAQE/EAXIfc9bC//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QVI8p/8QAHhABAQACAgIDAAAAAAAAAAAAAREAMSFRQWFxkaH/2gAIAQEAAT8QNTEkaY+NRhEHseuTHpp2EfeU1VJ4NSeeP1zVRaU5HifUyCBCkU16yc1abcnXc1W41BB8uf/Z",aspectRatio:1.0358565737051793,src:"/static/1828505f7a98d6e3a5645a2b0fca4912/e0c6a/upf-2.jpg",srcSet:"/static/1828505f7a98d6e3a5645a2b0fca4912/13bfa/upf-2.jpg 200w,\n/static/1828505f7a98d6e3a5645a2b0fca4912/bab55/upf-2.jpg 400w,\n/static/1828505f7a98d6e3a5645a2b0fca4912/e0c6a/upf-2.jpg 800w,\n/static/1828505f7a98d6e3a5645a2b0fca4912/fbb59/upf-2.jpg 1040w",sizes:"(max-width: 800px) 100vw, 800px"}}},IBACCALAUREATE_logo:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdWwSYH/xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIREhMi/9oACAEBAAEFArP06Ek//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bh//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAYEAACAwAAAAAAAAAAAAAAAAAAARExQf/aAAgBAQAGPwKEmaUf/8QAGRAAAwEBAQAAAAAAAAAAAAAAAREhAJHw/9oACAEBAAE/ISRSAbk3qYlpHm//2gAMAwEAAgADAAAAEHAP/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EBC//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBh/9oACAECAQE/EDC//8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAMSFBwbH/2gAIAQEAAT8Qd9TDkCwQav2acyITp2TxP//Z",width:96,height:36,src:"/static/7c4eb40df515b0f7dca14622183d861a/9836d/IB.jpg",srcSet:"/static/7c4eb40df515b0f7dca14622183d861a/9836d/IB.jpg 1x,\n/static/7c4eb40df515b0f7dca14622183d861a/86e2b/IB.jpg 1.5x,\n/static/7c4eb40df515b0f7dca14622183d861a/fd1b7/IB.jpg 2x,\n/static/7c4eb40df515b0f7dca14622183d861a/bad77/IB.jpg 3x"}}},IBACCALAUREATE_1:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAAAsSAAALEgHS3X78AAAEz0lEQVQ4y32Q20+adxzG38tNBRFBVJAiICingkABT21RoVgU0CKncignQfDl/IIc5AwKiPWQHrd2Sbc1zZalbtnSG7NkWXazZcn+gW3duh62Xey+UffaJb1a/OW5eH7J83me5AvUG1vlSjWVgBLxRDqVrZRKq1A0Eks1mjuV2t6LV38dHx8fHR0d/98D0unczvWGz7disdjzqehePffpg91qPp1ZK1Q2tp+/eHkanEomy4W1aCgYAv0bxVSzmitnV2vFTK2Ura43nv72+2mw27mUXQ0ve9xBv3evnv/47tZmZe3G9cp6MVsorj/74/lp8KRMEwt4U1B4s5zZLKe3N3LNSvbhvZ29ZrVaKf/8y6+nwfOqWZNWBboMcdABepxZyH+jlmwU4tu1Qq2S+/6HH+HQ4eHhfxWHh0dvi2ADlBJLyaB9Kw+W4vY85NrMrVwvRaspXznp36zmDg4OTnJvoLeDby0QdOvu1GP790vNQvjJo537u4VcAqxmgre3crcamSdf7r9Jnyy/+vufg29/evrsT9i/fv365ctXQCbmvbMR3P+gXM8Gvvn89t2tXCXlXw06Hn+4+8WD5icf3dt7f//R468/++q7cHo7mrudKd2s1+F7NFKJNJBYMUe9hlu16L1m/OGt4nY5ngraC5Db5zAlAu56Melf9kPRWCgEWW0e27Vlh93tsjkDHt+S0w3oNTKDRhr3GzMhS2LFFPMZcxFbxGNg0ga5dKZ2ZhoKuDIQmAj5bGaLxWiymowrbpff5VhyuYFZ2fmQc+G9WmS3AK4nXLu55bsNqJZfdcmkQZm0vmzdLYO1tVA+HrBdtZr0hmvmqx6n3eVw2K1WQKMahULa7XXvetGxlrLEIZvZpL50Se6YuphUTCUceqN5Rj1/QXF5bEo+LlNMzM5JNRr5olapVk0CuhjPEOcb4gJ9nK+D+MakUOXhYwhkFnlgXiRkcDlKr2ARklyJiLURyUJQPA+KNX7xnEek9kiAK2HOlRBHG+bqInxdjK+HhMJJEQ4/iEDjbCqVmD8qt3EtaxJDQmxMSUyw0rBGzdkxa/Y8MGEmSx20SQddem1Q7mGevcDA4Oi4Pmon7ozo3BiVyhlf4KjDPBU4PB8WqII8dZA3H+Krg8PqIB+Q2tgyNwv+q0D+YlREZlERqF4kuguNI+IIFGw3hT1OmwF5M8s85Qrvsp+r8LJkS+wpF3PSyQCU3mFNgK/0c5Q+7izIowloiPaeNhQWicZhes50Ykkk1hmFjytzsafczGk3e9oNwxyF9ywsYMrOkrlYF+2Msat0oZbcTe1tQ3a3INGt7RgUtheNJeIHCGNmukhPPaejSIxUobZfoCWNmgYnLEOAxEAbNw+JdKQJG23MwOjAdbe1d73T1t6K7ESiuzsweCyxV6wbEBuo/AWyQEsWaik8DQnuEhupwLCmnzdH5qnII0b6iJbZiSMgUCdwC7IDgcKiML3obpxIS5GYKCI9RagljZgGxi104WK/cJEEDMnxg9N49gzx7ByJN0fBEHpa27EtCBS8jOjoQnfhW9rQbDkRjp5b7B8x0CR6GjzOmSWylQRAcGmII6Uyxvv5sJmiYvt6WpFYePndthMejcVjeghDF4icy/3MaeLQZN/ARC9DRmAp+pgKwr/HxmHUuj0sjwAAAABJRU5ErkJggg==",aspectRatio:.864406779661017,src:"/static/f3f48884fc01f4bfbef2d4c9b3c8e6a0/d7c06/ib-germany.png",srcSet:"/static/f3f48884fc01f4bfbef2d4c9b3c8e6a0/550a1/ib-germany.png 200w,\n/static/f3f48884fc01f4bfbef2d4c9b3c8e6a0/d7c06/ib-germany.png 357w",sizes:"(max-width: 357px) 100vw, 357px"}}},IBACCALAUREATE_2:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACqklEQVQozwGfAmD9AOju6+717+ju6eXp5eLk3eHj3Ojr5ezu6ert5+bp5O/x7fDy7/b49fX5+fX7/Pf8/fr9/v3+//n8/Ofx8QDg5OG+vbnd29Pg3dPNzMXMysLU0MjKxLuajYiHenaml5O+rqrd49/m5uPv7uv39O739O/59fHr7+/U3t8AnI2Fhl1QjmhPf11Ib1FGeFlRqHtmgVhERy0nRCwqe09JXkE9WEVEon5sr4Njj3BerYRoeGJYXlthf3t+AIiAhJZ9eVhBPXRNRmFAOINYSY9eRnxOQ3hSSIRaTYJOQ1UuKoxSSMSJd4BTOohbUYVYP2RFPltFRFlOUQBpcoNyfYdTSTpbQTgTDxRtSDRXOChXODG1e22YcGooICoqHyVAJSZZQT9cRUhvdZM3U3cwJSopJTMzJBcAY0xOd15eeXk3YVwtFQwVWjotRS8shFVRt3dzu5mYXEpUVDYwCw0RLScmHRYhK2WjFXDGSTs8GhkkZUkjAF1FQ3FMRlRYJ2BKKIxlbH5neIRZT2E7N66Ehs6gpopiY0QqJx4WFxsZGikZGkRMdUhBWqd4bGxNQkcvKAAiICQvKCkCCB0vOXdPWJsVPJ9fQ09dMy+na3Soe3xMLCubY1pNOTgAAAFHKCJUMC9cMSZpPjGueV9VPTsAPDo/Pzo4CxE2BTezIlLDOTyAdU1JUDU4q3+BpXmAQRQXtFJMrzs9NhQYajoyQxsXSSEaPB0TnWtWWERDAGpNRU46OEUzQzM8dmpclKCFobiNhZdxaJyLj6uRmrQpL7wfJMIhJn8xOysjKi8PDEAjIA0ICWJBPS0fIgDIvb2tjoedbVCti4jHvsnW2ODk4urcy82GcW+bhYmjQECbEhePJCJjPD4KDhhSLyqFVU1UMSp+W1VSOjTT/SBnDNNGKwAAAABJRU5ErkJggg==",aspectRatio:1.8983957219251337,src:"/static/dc09ea02e4b8b0bf35a5e84da07f8d5c/0474e/ib-class.png",srcSet:"/static/dc09ea02e4b8b0bf35a5e84da07f8d5c/9044c/ib-class.png 200w,\n/static/dc09ea02e4b8b0bf35a5e84da07f8d5c/179c9/ib-class.png 400w,\n/static/dc09ea02e4b8b0bf35a5e84da07f8d5c/0474e/ib-class.png 710w",sizes:"(max-width: 710px) 100vw, 710px"}}},UPF_MASTER_logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAAAsSAAALEgHS3X78AAABZ0lEQVQ4y7WTW0sCQRTH/Zp9gojoJSIvGSXoekm6aRlBhAgVEoIPFSEIET0K0YMPGllkNjPrrpaX3XV2ZjvrQ6g4+pANf5Y5c/Y3/7OzZxzWH4ZjprDJLCYUh+ysnTm3Hz2KnEHkDGFvFK9tDWk9ilYCcjghhE1F/VhwUSTTTzKkGqak3nur1ha93DAEcF3FnshvODIAgxK4Loah7H5oDa6zdqdxcgH+UDzT9PEwJQrx7bZz91+X143TtFZ4UuPJ1lW+mcqox2fwAmwtdKa4LgcPm+kM8kjV+eXWTV6JJwGTI0faY9GGXSExLCtkY9sovcj+mJpINc+zxL/fur37zuY6DwW9WMabO6yrTflmzuwQqjVKFThn4O1FTUfu0OQDk2DOqWnLNK3+xM5yDp7IHZ4Ir0oTfhVkhTDrdN/nlrBvjwRixD8s6QB5o9Akg/uO9ja0l1GuGM+vY1SumErj/64kY1M0K+cfjAMpOECaxqwAAAAASUVORK5CYII=",width:96,height:91,src:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png",srcSet:"/static/0f565b356069a0c2aa43ef0ad5ef8297/5a287/UPF_LOGO.png 1x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/697ba/UPF_LOGO.png 1.5x,\n/static/0f565b356069a0c2aa43ef0ad5ef8297/265b6/UPF_LOGO.png 2x"}}},UPF_MASTER_1:null,UPF_MASTER_2:null,UPF_MASTER_3:null}}},165:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAUBAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAe2XblzdkXGqaVkH/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxIEESH/2gAIAQEAAQUC5LFKwXqg9Fq7QDUXrLtkagJn/8QAFREBAQAAAAAAAAAAAAAAAAAAAiD/2gAIAQMBAT8BMf/EABURAQEAAAAAAAAAAAAAAAAAAAEg/9oACAECAQE/AWP/xAAcEAACAQUBAAAAAAAAAAAAAAABEQAQEyEiMVH/2gAIAQEABj8C1wSU5cuE+gx0WBAuV7P/xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAxIXGh/9oACAEBAAE/IQlHwDfYFHTQA4l1Ugp6YxInLOYAORDPU6s1N/cI8Rv/2gAMAwEAAgADAAAAEDAofv/EABcRAQEBAQAAAAAAAAAAAAAAAAEQETH/2gAIAQMBAT8QAjsFOT//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QSMzZ/8QAHhABAAICAgMBAAAAAAAAAAAAAQARIUExUWGh0fD/2gAIAQEAAT8QoqFZrSr6nKiJZS+PLog+GCHiy9n5lwsBPEjv5K801LeCFxGgXUwzvl3KuRfAz//Z",width:180,height:188,src:"/static/4629732b23224c0643a398f62b876f9b/a7e11/portrait.jpg",srcSet:"/static/4629732b23224c0643a398f62b876f9b/a7e11/portrait.jpg 1x,\n/static/4629732b23224c0643a398f62b876f9b/dee67/portrait.jpg 1.5x,\n/static/4629732b23224c0643a398f62b876f9b/a6257/portrait.jpg 2x"}}}}}},166:function(e,A,a){"use strict";a.r(A);a(33);var t=a(0),l=a.n(t),n=a(4),i=a.n(n),c=a(54),r=a(2),s=function(e){var A=e.location,a=r.default.getResourcesForPathnameSync(A.pathname);return l.a.createElement(c.a,Object.assign({location:A,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},A.default=s}}]);
//# sourceMappingURL=component---src-pages-index-tsx-cf437dd3a57c4252f9f1.js.map