document
    .querySelectorAll('.column')
    .forEach(Column.process)

document
    .querySelectorAll('.note')
    .forEach(Note.process)

document
    .querySelector('[data-action-addColumn]')
    .addEventListener('click', function (event){
            const  columnElement = document.createElement('div')
            columnElement.classList.add('column')
            columnElement.setAttribute('draggable', 'true')
            columnElement.setAttribute('data-column-id', Column.idCounter)

            columnElement.innerHTML = 
`<p class="column-header">Ir ieplānots</p>
<div data-notes></div>
<p class="column-footer">
    <span data-action-addNote class="action">+ Izveidot jaunu kartiņu</span>
</p>`
            Column.idCounter++

            document.querySelector('.columns').append(columnElement)

            Column.process(columnElement)
        })