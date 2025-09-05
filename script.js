// Legal modal functions
function showPrivacyPolicy() {
    alert('Privacy Policy: We process data locally and delete immediately. Contact: tmrw@tmrw.co.kr');
}

function showTermsOfService() {
    alert('Terms: Entertainment only. Must be 13+. Not medical/legal advice.');
}

function showAboutUs() {
    alert('About: Digital fortune telling for entertainment and self-reflection.');
}

function showContact() {
    alert('Contact: tmrw@tmrw.co.kr - Technical issues, feedback, privacy questions.');
}

// 일일 제한 시스템
function checkDailyLimit(service) {
    const today = new Date().toDateString();
    const lastUsed = localStorage.getItem(`${service}_lastUsed`);
    
    if (lastUsed === today) {
        showDailyLimitMessage(service);
        return false;
    }
    
    localStorage.setItem(`${service}_lastUsed`, today);
    return true;
}

function showDailyLimitMessage(service) {
    let serviceName, emoji, message;
    
    switch(service) {
        case 'horoscope':
            serviceName = 'Daily Horoscope';
            emoji = '🌟';
            message = 'You have already checked your horoscope today!';
            break;
        case 'tarot':
            serviceName = 'Tarot Reading';
            emoji = '🔮';
            message = 'You have already received your tarot reading today!';
            break;
        case 'luckyNumbers':
            serviceName = 'Lucky Numbers';
            emoji = '🎲';
            message = 'You have already generated your lucky numbers today!';
            break;
    }
    
    alert(`${emoji} ${serviceName}\n\n${message}\n\nCome back tomorrow for a new reading!\n\n✨ The universe reveals new insights each day ✨`);
}

// 페이지 로드시 새 날짜 체크
function checkAndResetIfNewDay() {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisitDate');
    
    if (lastVisit && lastVisit !== today) {
        const services = ['horoscope', 'tarot', 'luckyNumbers'];
        services.forEach(service => {
            localStorage.removeItem(`${service}_lastUsed`);
        });
    }
    
    localStorage.setItem('lastVisitDate', today);
}

checkAndResetIfNewDay();
