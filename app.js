const overlay = document.querySelector(".overlay");
const shareForm = document.querySelector(".shareForm");
const shareButton = document.querySelector(".btn-4");
const doneBtn = document.querySelector("#doneBtn");
const input = document.querySelector("#input");
const copyContent = document.querySelector("#copyContent");
const allBtns = document.querySelector(".allBtns");
const copyBtns = document.querySelectorAll("#copyBtn");
copyBtns.forEach((copyBtn,index) => {
  copyBtn.addEventListener("click", function () {
    if (navigator.clipboard.writeText(copyBtn.dataset.button)) {
      const previuosText = copyBtn.textContent;
    //   console.log(index);
      copyBtn.textContent = `copied ${index+1}`;
      setTimeout(() => {
        copyBtn.textContent = previuosText;
      }, 2000);
    }
  });
});
shareButton.addEventListener("click", function () {
  shareForm.style.display = "block";
  overlay.style.display = "block";
});
doneBtn.addEventListener("click", function () {
  shareForm.style.display = "none";
  overlay.style.display = "none";
});
input.textContent = "index.html";
const contentToCopy = input.textContent;
copyContent.addEventListener("click", function () {
  if (navigator.clipboard.writeText(contentToCopy)) {
    copyContent.textContent = "copied";
    setTimeout(() => {
      copyContent.textContent = "copy";
    }, 2000);
  }
});
