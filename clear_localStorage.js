// 清理localStorage中可能导致key冲突的旧数据
localStorage.removeItem('app_error_books');
localStorage.removeItem('app_red_pen_tasks');
localStorage.removeItem('app_assignments');
localStorage.removeItem('app_essay_tasks');
localStorage.removeItem('app_classes');
console.log('LocalStorage cleared successfully!');