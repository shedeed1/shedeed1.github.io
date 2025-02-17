function navigateTo(section) {
    const content = document.getElementById('content');
    if (section === 'reading') {
        content.innerHTML = '<h2>قسم القراءة</h2><p>هنا ستجد تحديات القراءة.</p>';
    } else if (section === 'writing') {
        content.innerHTML = '<h2>قسم الكتابة</h2><p>هنا ستجد تحديات الكتابة.</p>';
    } else if (section === 'math') {
        content.innerHTML = '<h2>قسم الحساب</h2><p>هنا ستجد تحديات الحساب.</p>';
    } else 
        content.innerHTML = '<p>اختر قسمًا للبدء.</p
