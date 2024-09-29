const insertId = document.getElementById('insert');
let keyHistory = [];

window.addEventListener('keydown', (keyEvent) => {
    keyHistory.push({
        key: keyEvent.key === ' ' ? 'space' : keyEvent.key,
        keycode: keyEvent.keyCode,
        code: keyEvent.code
    });

    const history = keyHistory.map((keyEvent, index) => {
        return `
            <tr>
                <td>${keyEvent.key}</td>
                <td>${keyEvent.keycode}</td>
                <td>${keyEvent.code}</td>
            </tr>
        `;
    }).join('');

    insertId.innerHTML = `
            <div class='color'>
          <table style="width:100%">
              <tr>
                  <th>key</th>
                  <th>keyCodes</th>
                  <th>Code</th>
              </tr>
              <tr>
                ${history}
              </tr>
          </table>
      </div>
        `;

});