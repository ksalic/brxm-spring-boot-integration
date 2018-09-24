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
      <div data-cms-component-id="${pageModel.page.namedComponents["main"].namedComponents["container"].ID}">
        <#list pageModel.page.namedComponents["main"].namedComponents["container"].components as component>
          <div data-cms-component-id="${component.ID}">
          <#--<h3>${component.name}</h3>-->
            <div>
              <#if component.models??>
                  <#assign ref>${component.models.document.reference}</#assign>
                <article data-cms-content-id="${ref}">
                      <#if pageModel.contentNode[ref]??>
                          <#assign document=pageModel.contentNode[ref]/>
                        <h2>${document.get("title").asText()}</h2>
                          ${document.get("content").get("value").asText()}
                          <#assign imageRef>${document.get("image").get("$ref").asText()?substring(9)}</#assign>
                        <img src="http://localhost:8080${pageModel.contentNode[imageRef].get("original").get("_links").get("site").get("href").asText()}"/>
                      </#if>
                </article>
              </#if>
            </div>
          </div>
        </#list>
      </div>
    </div>
    </#if>
  </body>
</html>