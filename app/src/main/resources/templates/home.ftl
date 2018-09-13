<!DOCTYPE html>
<html lang="en">
<#-- @ftlvariable name="pageModel" type="com.bloomreach.pagemodel.api.model.PageModel" -->
<#-- @ftlvariable name="component" type="com.bloomreach.pagemodel.api.model.ComponentModel" -->
  <head>
    <meta charset="UTF-8">
    <title>Hello ${pageModel.page.name}!</title>
  <#--<link href="/css/main.css" rel="stylesheet">-->
  </head>
  <body>
    <h2>Hello ${pageModel.page.name}!</h2>
    <#if pageModel?has_content>
    <div>
      <div data-cms-id="${pageModel.page.namedComponents["main"].namedComponents["container"].ID}">
        <#list pageModel.page.namedComponents["main"].namedComponents["container"].components as component>
          <div data-cms-id="${component.ID}">
            <h3>${component.name}</h3>
              <#--<#assign type>${component.label}</#assign>-->
              <#--<#if component.models.document.ref??>-->
                  <#--<#assign ref>${component.models.document.ref?substring(9)}</#assign>-->
              <#--</#if>-->
          </div>
        </#list>
      </div>
    </div>
    </#if>
  </body>
</html>