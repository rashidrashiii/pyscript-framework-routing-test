from js import document

# Access the div element using its id
div_element = document.getElementById("my-div")

def btn_click(e):
  # Update the innerHTML property of the div element
  div_element.innerHTML = "Button clicked"