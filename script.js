

// بننتظر لحد ما الصفحة (HTML) تخلص تحميل بالكامل قبل ما نشغل أي كود
document.addEventListener('DOMContentLoaded', function () {


    // 1) فتح وقفل قايمة الموبايل (Hamburger Menu)
    // بنجيب زرار الهمبرجر وقايمة الروابط بتاعته
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // عند الضغط على زرار الهمبرجر، بنضيف/بنشيل كلاس "is-open"
    // الكلاس ده هو اللي بيتحكم في ظهور القايمة عن طريق الـ CSS
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('is-open');
    });

    // لو المستخدم دوس على أي رابط جوه القايمة (في وضع الموبايل)،
    // بنقفل القايمة تلقائياً عشان الرابط يشتغل بدون عوائق
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('is-open');
        });
    });


    // ----------------------------------------
    // 2) تحديث سنة حقوق النشر في الفوتر تلقائياً
    // بدل ما نكتبها يدوي ونضطر نغيرها كل سنة
    // ----------------------------------------
    const yearSpan = document.getElementById('currentYear');
    yearSpan.textContent = new Date().getFullYear();

});