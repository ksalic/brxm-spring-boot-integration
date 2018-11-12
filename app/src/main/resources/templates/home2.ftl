<!DOCTYPE html>
<#-- @ftlvariable name="pageModel" type="com.bloomreach.pagemodel.api.model.PageModel" -->
<#-- @ftlvariable name="component" type="com.bloomreach.pagemodel.api.model.ComponentModel" -->
<#-- @ftlvariable name="pma" type="com.bloomreach.pagemodel.api.util.TemplateSupport" -->
<html class="no-js">
  <head>
    <title>BR Connect 2018</title>
  </head>
  <body id="body">
    <h1>Hello ${pageModel.page.name}</h1>
      <#assign container=pageModel.page.namedComponents["body"].namedComponents["container"]/>
    <div ${pma.component(container)}>
      <#if container??>
          <#list container.components as component>
            <section class="${component.label?lower_case}"${pma.component(component)}>
                 <#if component.models??>
                    <#assign ref=component.models.document.reference />
                    <#assign document=pageModel.contentNode[ref]/>
                   <div ${pma.content(component.models.document)}>
                     <img src="${pma.getImageUrl(pageModel, document.get("image").get("$ref"))}" height="300" alt="">
                     <h2 class="">${document.get("title").asText()}</h2>
                       ${document.get("content").get("value").asText()}
                               <#if document.has("link")>
                                   <#assign link=pma.find(pageModel, document.get("link").get("$ref").asText())/>
                               <#else >
                                   <#assign link=""/>
                               </#if>
                   </div>
                 <#else>
                    <h2>Currently no model available for ${component.name} of type ${component.label}.
                      Click on this component and pick a Banner Document</h2>
                 </#if>
            </section>

          </#list>
      </#if>
    </div>
  </body>
</html>
