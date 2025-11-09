function formValidation() {
  const name = document.forms["myForm"]["fname"].value.trim();
  const email = document.forms["myForm"]["email"].value.trim();
  const message = document.forms["myForm"]["message"].value.trim();

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  if (!namePattern.test(name)) {
    alert("Name can contain only letters with a single space between words");
    return false;
  }

  
  if (email === "") {
    alert("Please enter a valid email address (e.g., name@gmail.com)");
    return false;
  }

  

  if (message === "") {
    alert("Message must be filled out");
    return false;
  }

  return true; 
}