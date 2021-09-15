const contact = function() {
    const element = document.createElement('div');
    const heading = document.createElement('h1');
    heading.innerText = 'Contact';
    element.appendChild(heading);

    const heading2 = document.createElement('h2');
    heading2.innerText = 'The Best-Restaurant-Ever Restaurant';
    element.appendChild(heading2);

    const address = document.createElement('p');
    address.innerText = '123 Fourth St. Suite 567\nSome City, State, 89012'
    element.appendChild(address);

    const phone = document.createElement('p');
    phone.innerText = '123-456-7890';
    element.appendChild(phone);

    return element;
}

export default contact;