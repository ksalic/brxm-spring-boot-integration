<!DOCTYPE html>
<html lang="en">
<#-- @ftlvariable name="pageModel" type="org.onehippo.connectapp.model.deprecated.PageModel" -->
<#-- @ftlvariable name="component" type="org.onehippo.connectapp.model.deprecated.ComponentModel" -->
  <head>
    <meta charset="UTF-8">
    <title>Hello ${pageModel.page.name}!</title>
  <#--<link href="/css/main.css" rel="stylesheet">-->
  </head>
  <body>
    <h2>Hello ${pageModel.page.name}!</h2>
    <#if pageModel?has_content>
    <#if isPreview>
    ${pageModel.page.namedComponents["main"].namedComponents["container"].meta.start}
    </#if>
    <div  class="hst-container">
        <#list pageModel.page.namedComponents["main"].namedComponents["container"].components as component>
             <#if isPreview>
                 ${component.meta.start}
             </#if>
          <div  class="hst-container-item">
            <h3>${component.name}</h3>
              <#assign type>${component.label}</#assign>
              <#if component.models.document.ref??>
                  <#assign ref>${component.models.document.ref?substring(9)}</#assign>
            <#--<code class="json">-->
              <#---->
            <#--</code>-->
              </#if>
          </div>
            <#if isPreview>
                ${component.meta.end}
            </#if>
        </#list>
    </div>
        <#if isPreview>
            ${pageModel.page.namedComponents["main"].namedComponents["container"].meta.end}
        </#if>
    </#if>
  </body>
</html>