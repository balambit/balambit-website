import { chatData } from "./data.js";
import { demoTranslations } from "./i18n-demo.js";

const screens = {
    chat: document.querySelector('[data-screen="chat"]'),
    confirmation: document.querySelector('[data-screen="confirmation"]'),
};

const phoneHotspot = document.getElementById("phone-hotspot");
const restartDemoButton = document.getElementById("restart-demo");
const chatThread = document.getElementById("chat-thread");
const stepTitle = document.getElementById("step-title");
const stepMeterFill = document.getElementById("step-meter-fill");
const patientAction = document.getElementById("patient-action");
const aiAction = document.getElementById("ai-action");
const businessImpact = document.getElementById("business-impact");
const signalBoard = document.getElementById("signal-board");
const valueTitle = document.getElementById("value-title");
const valueCopy = document.getElementById("value-copy");

// Language detection
let currentLang = localStorage.getItem('language') || 'en';
let chatSteps = chatData[currentLang] || chatData['en'];

let currentStep = 0;

function applyStaticTranslations() {
    const dict = demoTranslations[currentLang] || demoTranslations['en'];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = dict[key];
        if (translation) {
            el.innerHTML = translation;
        }
    });
}

function setActiveScreen(screenName) {
    Object.values(screens).forEach((screen) => {
        screen.classList.toggle("is-active", screen.dataset.screen === screenName);
    });
}

function renderMessages(messages) {
    chatThread.innerHTML = "";

    messages.forEach((message) => {
        const row = document.createElement("div");
        row.className = `message-row ${message.side}`;

        const bubble = document.createElement("div");
        bubble.className = "message-bubble";
        bubble.textContent = message.text;

        const meta = document.createElement("span");
        meta.className = "message-meta";
        meta.innerHTML = `${message.time}${message.checks ? '<span class="message-checks">&#10003;&#10003;</span>' : ""}`;
        bubble.appendChild(meta);
        row.appendChild(bubble);
        chatThread.appendChild(row);
    });
}

function renderSignals(signals) {
    signalBoard.innerHTML = "";

    signals.forEach((signal) => {
        const chip = document.createElement("article");
        chip.className = "signal-chip";
        chip.innerHTML = `<strong>${signal.title}</strong><span>${signal.copy}</span>`;
        signalBoard.appendChild(chip);
    });
}

function renderStep(stepIndex) {
    const step = chatSteps[stepIndex];
    const totalSteps = chatSteps.length;
    const progress = ((stepIndex + 1) / totalSteps) * 100;

    const dict = demoTranslations[currentLang] || demoTranslations['en'];

    renderMessages(step.messages);
    renderSignals(step.signals);
    
    // Step format: "Step {current} of {total}"
    if (dict.step_format) {
        stepTitle.textContent = dict.step_format
            .replace('{current}', stepIndex + 1)
            .replace('{total}', totalSteps);
    } else {
        stepTitle.textContent = `Step ${stepIndex + 1} of ${totalSteps}`;
    }

    stepMeterFill.style.width = `${progress}%`;
    patientAction.textContent = step.patientAction;
    aiAction.textContent = step.aiAction;
    businessImpact.textContent = step.businessImpact;
    valueTitle.textContent = step.value.title;
    valueCopy.textContent = step.value.copy;
}

function advanceDemo() {
    if (currentStep >= chatSteps.length - 1) {
        setActiveScreen("confirmation");
        return;
    }

    currentStep += 1;
    renderStep(currentStep);
}

function resetDemo() {
    currentStep = 0;
    renderStep(currentStep);
    setActiveScreen("chat");
}

phoneHotspot.addEventListener("click", advanceDemo);
phoneHotspot.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        advanceDemo();
    }
});

restartDemoButton.addEventListener("click", resetDemo);

// Inicializar la demo
applyStaticTranslations();
renderStep(currentStep);
