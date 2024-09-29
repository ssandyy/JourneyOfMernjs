const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
   // console.log(e);
    insert.innerHTML = `
        <div class='color'>
          <table style="width:100%">
              <tr>
                  <th>key</th>
                  <th>keyCodes</th>
                  <th>Code</th>
              </tr>
              <tr>
                <td>${e.key === ' ' ? 'space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
              </tr>
          </table>
      </div>
    `;
    
});
