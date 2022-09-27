let table_form = base.getTable("Réponse Formulaires");
let table_user = base.getTable("Les Contacts");
const form_name = table_form.getField('Les Formulaires');
const tags_parcours = table_user.getField('Tags Parcours');
let queryResult = await table_form.selectRecordsAsync({fields: ["Les Formulaires", "Téléphone"]});
let i = 0
let j = 0
let formation_choice = tags_parcours.options.choices.filter(choice => choice.name === "Formation")[0];
console.log(formation_choice)
let replacements = []
for (let record of queryResult.records) {
  if (record.getCellValueAsString("Les Formulaires") === "Eval Formation") {
    if (record)
    console.log(record);
    tags_parcours.updateOptionsAsync({
          choices: [
        ...tags_parcours.options.choices,
        formation_choice]
    })
    j++
  }
  i++
  if (j>1) {
    break
  }
}
console.log(i)
console.log(queryResult.records.length)
