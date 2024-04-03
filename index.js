
const side_menu = [{
    image:'Leads.svg'
},
{
    image:'Inventory.svg'
},
{
    image:'dashboard_erp_logo.svg'
},{
    image:'Customers.svg'
},
{
    image:'category_erp_logo_white.svg'
},
{
    image:'Settings.svg'
},
{
    image:'Suppliers.svg'
},
{
    image:'Vendor.svg'
}]

var customer_list = localStorage.values ? JSON.parse(localStorage.values):[]
const card_items = [{
    image:'./assets/cards/users.png',
    label:"Total Customers",
    count:0
},
{
    label:"Active Customers",
    count:0,
    image:'./assets/cards/user-active.png'
},
{
    label:"InActive Customers",
    count:0,
    image:'./assets/cards/user-inactive.png'
},{
    label:"Credit Customers",
    count:0,
    image:'./assets/cards/inr.png'
},
{
    label:"Cash In Advance",
    count:0,
    image:'./assets/cards/inr.png'
}]

form_fields = [{
    label:"Company Details",
    fields:[{
        "field_name":"company_name",
        "label":"Company Name"
    },{
        "field_name":"gstin_number",
        "label":"GSTIN Number"
    },{
        "field_name":"import_export_code",
        "label":"Import Export Code"
    },{
        "field_name":"email_id",
        "label":"E-mail ID"
    },{
        "field_name":"website",
        "label":"Website"
    }]
},{
    label:"Address Details",
    fields:[{
        "field_name":"address_line_1",
        "label":"Address Line 1"
    },{
        "field_name":"address_line_2",
        "label":"Address Line 2"
    },{
        "field_name":"city",
        "label":"City"
    },{
        "field_name":"state",
        "label":"State"
    },{
        "field_name":"pincode",
        "label":"Pincode"
    }]
},{
    label:"Contact Person",
    fields:[{
        "field_name":"poc_name",
        "label":"POC Name"
    },{
        "field_name":"job_title",
        "label":"Job Title"
    },{
        "field_name":"contact_number_1",
        "label":"Contact Number 1"
    },{
        "field_name":"contact_number_2",
        "label":"Contact Number 2"
    },{
        "field_name":"contact_email_id",
        "label":"Contact E-mail ID"
    }]
},{
    label:"Address Details",
    fields:[{
        "field_name":"authorised_name",
        "label":"Authorised Person Name"
    },{
        "field_name":"authorised_designation",
        "label":"Authorised Person Designation"
    },{
        "field_name":"authorised_designation",
        "label":"authorised_contact_number"
    }]
}]
var form_values = {}
addSideMenuIcons()
addCards()
addListItems()
constructForm()

function addSideMenuIcons(){
    let icon_div = ''
    for (let index = 0; index < side_menu.length; index++) {
        const img = side_menu[index]['image'];
        icon_div += `<div>
        <img src="./assets/side-menu/${img}" alt="image">
       </div>`
    }
    document.getElementById('sideMenu').innerHTML = icon_div
    let mobile_icon_div = ''
    for (let index = 0; index < 5; index++) {
        const img = side_menu[index]['image'];
        mobile_icon_div += `<div>
        <img src="./assets/side-menu/${img}" alt="image">
       </div>`
    }
    document.getElementById('tabMenu').innerHTML = mobile_icon_div
}

function addCards(){
    let card_div = ''
    for (let index = 0; index < card_items.length; index++) {
        card_div += `<div class="cusomer-card d_flex">
        <div style="padding: 10px;"><img src="${card_items[index]['image']}" alt=""></div>
        
        <div class="count">
            <p>${card_items[index]['label']}</p>
            <p id="${card_items[index]['label']}">${card_items[index]['count']}</p>
        </div>
    </div>`
    }
    document.getElementById('cards').innerHTML = card_div
}

function addListItems(){  
    document.getElementById('Total Customers').textContent = customer_list.length
    let body_div = ''
    for (let index = 0; index < customer_list.length; index++) {
        body_div += `<div class="d_flex table-body">
        <div>${customer_list[index]['customer_id'] || '-'}</div>
        <div>${customer_list[index]['company_name'] || '-'}</div>
        <div>${customer_list[index]['contact_number_1'] || '-'}</div>
        <div>${customer_list[index]['email_id'] || '-'}</div>
        <div>${customer_list[index]['address_line_1'] || '-'}</div>
        <div>${customer_list[index]['city'] || '-'}</div>
        <div>${customer_list[index]['pincode'] || '-'}</div>
        <div>${customer_list[index]['state'] || '-'}</div>
        <div>${customer_list[index]['poc_name'] || '-'}</div>
        <div>${customer_list[index]['job_title'] || '-'}</div>
        <div>${customer_list[index]['authorised_name'] || '-'}</div>
    </div>`
    }
    document.getElementById('table-body').innerHTML = body_div
}

function constructForm(){
    let form_div = '<div>'
    for (let index = 0; index < form_fields.length; index++) {
        form_div += `<p style="margin: 10px 0;">${form_fields[index]['label']}</p>`
        form_div += '<div class="d_flex form-container">'
        for (let f_index = 0; f_index < form_fields[index]['fields'].length; f_index++) {
            let obj = form_fields[index]['fields'][f_index]
            form_div += `<input class="form-input" type="text" name='${obj['field_name']}' placeholder='${obj['label']}' onchange="getInput(this)">`
        }
        form_div += '</div>'
    }
    form_div += '</div>'
    document.getElementById('form-fields').innerHTML = form_div
    
    
}

function toggleDashboard(type){
    if(type == 'dashboard'){
        document.getElementById('dashboard').classList.add("show")
        document.getElementById('dashboard').classList.remove("hide")
        document.getElementById('customer-form').classList.add("hide")
        document.getElementById('customer-form').classList.remove("show")

        document.getElementById('back').classList.add("hide")
        document.getElementById('back').classList.remove("show")
        document.getElementById('logo').classList.add("show")
        document.getElementById('logo').classList.remove("hide")
        addListItems()
    }else{
        document.getElementById('dashboard').classList.remove("show")
        document.getElementById('dashboard').classList.add("hide")
        document.getElementById('customer-form').classList.remove("hide")
        document.getElementById('customer-form').classList.add("show")

        document.getElementById('back').classList.remove("hide")
        document.getElementById('back').classList.add("show")
        document.getElementById('logo').classList.remove("show")
        document.getElementById('logo').classList.add("hide")
        
    }
    
}

function getInput(event){
    form_values[event.name] = event.value
    console.log(form_values);
}

function submitForm(){
    let keys = Object.keys(form_values)
    if(keys.length > 2){
        let values = localStorage.values ? JSON.parse(localStorage.values) : []
        values.push(form_values)
        form_values['customer_id'] = 'CUST-' + (1000+values.length) 
        localStorage.values = JSON.stringify(values)
        form_values = {}
        var fields = document.getElementById('form-fields')
        let inputs = fields.querySelectorAll('.form-input')
        let toast = document.getElementById('toast')
        toast.textContent='Submitted Successfully'
        toast.classList.add('success','active')
        setTimeout(()=>{toast.classList.remove('success','active')},2000)
        for (let i_index = 0; i_index < inputs.length; i_index++) {
            inputs[i_index].value = ''
        }
    }else{
        let toast = document.getElementById('toast')
        toast.textContent='Minimum 4 Fields Required'
        toast.classList.add('failed','active')
        setTimeout(()=>{toast.classList.remove('failed','active')},2000)
    }
    
}
function back(){
    
     customer_list = localStorage.values ? JSON.parse(localStorage.values):[]
     toggleDashboard('dashboard')
}
function search(event){
    console.log(event.value);
}