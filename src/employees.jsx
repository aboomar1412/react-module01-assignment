let sally = 'Sally Smith'
let mark = 'Mark Martin'
let holly = 'Holly Unlikely'
let amol = 'Amol Shookup'
let eias = 'Eias Alhomsi'
const element = (
    <ul style={{'color':'DarkGreen', 'fontSize': '24px'}}>
        <li>{sally}</li>
        <li>{mark}</li>
        <li>{holly}</li>
        <li>{amol}</li>
        <li>{eias}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))