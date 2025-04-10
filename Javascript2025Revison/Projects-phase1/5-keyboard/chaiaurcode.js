console.log('Project 5');

const insert = document.getElementById('insert');


window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div>
        <table>
            <tr>
                <th>Key</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.code}</td>
            </tr>
        </table>
        </div>
    `
})
