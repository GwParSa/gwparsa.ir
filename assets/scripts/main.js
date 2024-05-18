let captionLength = 0;
let caption = '';

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    typingEffect();
});

function typingEffect() {
    pageDetector(statusChanger());
    type();
}

function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 5);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

const pageDetector = (discordStatus) => {
    const content = {
        home: `Parsa Sorsori<br> Software Engineer<br><br><br>Hello there! My name is Parsa and I am a 20-year-old engineer from Iran. My interests lie in the field of computers and technologies, which is why I am currently studying Computer Engineering at QIAU. I discovered my passion for programming at the age of 11 and since then, I have been learning the C# language. At 16, I began exploring front-end web development and UI designing.<br><br><br><a href='http://gwparsa.ir/projects'>/Projects</a><a href='contact/contact.html'>/Contact</a><a href='http://gwparsa.ir/'>/Home</a><br><br>`,
        contact: `Contacting Parsa<br>- I'm an introverted person, so please message me instead of calling! Thanks.<br><br><a target='_blank' href='tel:+989363610083'>- SMS: +98936-361-0083</a><br><a target='_blank' href='#'>- Discord: @gwparsa</a><br><a target='_blank' href='mailto:gwparsa@gmail.com'>- Email: gwparsa@gmail.com</a><br><br><a target='_blank' href='https://instagram.com/gwparsa'>- Instagram: gwparsa</a><br><a target='_blank' href='https://t.me/gwparsa'>- Telegram: @gwparsa</a><br><a target='_blank' href='https://x.com/parsasudo'>- X(Twitter): Parsasudo</a><br><a target='_blank' href='https://github.com/gwparsa'>- Github: gwparsa</a><br><a target='_blank' href='https://www.linkedin.com/in/parsa-sorsori-aa51a721a'>- LinkedIn: Parsa Sorsori</a><br><br>`,
        projects: `this is projects page`
    };
    const currentPage = window.location.pathname.split('/')[1];
    if(currentPage === "contact"){
        caption = content.contact;
    }else if(currentPage === "projects"){
        caption = content.projects;
    }else{
        caption = content.home;
    };
}

const statusChanger = () => {
    const nowDate = new Date().getHours();
    if(nowDate >= 12 && nowDate <= 23) {
        return "Available right now! Contact me.";
    }else{
        return "I'm sleeping. Contact via email.";
    }
}