import DocumentsPane from 'sanity-plugin-documents-pane'

export const defaultDocumentNode = (S, {schemaType}) => {
  //Specific view:
  if (schemaType == 'article') {
    return S.document().views([
      S.view.form().title('Editor'),

      S.view
        .component(DocumentsPane)
        .title('Comments')
        .options({
          query: `*[_type == "comment" && commentTo._ref == $id]`,
          params: {id: '_id'},
        }),
    ])
  }

  //Default view:
  return S.document().views([S.view.form()])
}
