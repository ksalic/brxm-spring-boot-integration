<!DOCTYPE html>
<html lang="en">
<#-- @ftlvariable name="pageModel" type="com.bloomreach.pagemodel.api.model.PageModel" -->
<#-- @ftlvariable name="component" type="com.bloomreach.pagemodel.api.model.ComponentModel" -->
<#-- @ftlvariable name="ts" type="com.bloomreach.pagemodel.api.util.TemplateSupport" -->
  <head>
    <meta charset="UTF-8">
    <title>Hello ${pageModel.page.name}!</title>
  <#--<link href="/css/main.css" rel="stylesheet">-->
  </head>
  <body>
    <h2>Hello ${pageModel.page.name}!</h2>
    <#if pageModel?has_content>
    <div>
      <div ${ts.component(pageModel.page.namedComponents["main"].namedComponents["container"])}>
        <#list pageModel.page.namedComponents["main"].namedComponents["container"].components as component>
          <div ${ts.component(component)}>
            <div>
              <#if component.models??>

                  <#assign ref>${component.models.document.reference}</#assign>

                <article ${ts.content(component.models.document)}>
                  <#if pageModel.contentNode[ref]??>
                      <#assign document=pageModel.contentNode[ref]/>
                    <h2>${document.get("title").asText()}</h2>
                      ${document.get("content").get("value").asText()}
                    <img src="${ts.getImageUrl(pageModel, document.get("image").get("$ref"))}"/>
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