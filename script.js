// ==UserScript==
// @name         Hide_My_Tag
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Blurs Problem Tag
// @author       Shomik Shahriar
// @match        https://codeforces.com/problemset/problem/*
// @match        https://codeforces.com/contest/*/problem/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codeforces.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function blurTagBox() {
        const allRoundboxes = document.querySelectorAll('.roundbox');
        let tagsBox = null;

        for (let box of allRoundboxes) {
            if (box.textContent.includes('Problem tags')) {
                tagsBox = box;
                break;
            }
        }

        if (!tagsBox) return;

        tagsBox.style.filter = "blur(8px)";
        tagsBox.style.transition = "filter 0.3s";

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = "Unhide Tags";
        toggleBtn.style.marginTop = "10px";
        toggleBtn.style.padding = "5px 12px";
        toggleBtn.style.fontWeight = "bold";
        toggleBtn.style.border = "1px solid black";
        toggleBtn.style.borderRadius = "6px";
        toggleBtn.style.backgroundColor = "#fff";
        toggleBtn.style.cursor = "pointer";

        let hidden = true;

        toggleBtn.onclick = () => {
            hidden = !hidden;
            tagsBox.style.filter = hidden ? "blur(8px)" : "none";
            toggleBtn.textContent = hidden ? "Unhide Tags" : "Hide Tags";
        };

        tagsBox.parentNode.insertBefore(toggleBtn, tagsBox.nextSibling);
    }

    window.addEventListener('load', blurTagBox);
})();
