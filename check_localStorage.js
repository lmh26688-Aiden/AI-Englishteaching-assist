// 检查localStorage中的数据
console.log('=== 检查localStorage中的数据 ===');

// 检查错题本数据
const errorBooks = localStorage.getItem('app_error_books');
if (errorBooks) {
  const parsedBooks = JSON.parse(errorBooks);
  console.log('错题本数量:', parsedBooks.length);
  
  // 检查重复的ID
  const bookIds = parsedBooks.map(book => book.id);
  const uniqueBookIds = [...new Set(bookIds)];
  
  if (bookIds.length !== uniqueBookIds.length) {
    console.log('发现重复的错题本ID:');
    const duplicateIds = bookIds.filter((id, index) => bookIds.indexOf(id) !== index);
    console.log(duplicateIds);
  }
  
  // 检查题目ID
  parsedBooks.forEach(book => {
    if (book.items && book.items.length > 0) {
      const itemIds = book.items.map(item => item.id);
      const uniqueItemIds = [...new Set(itemIds)];
      
      if (itemIds.length !== uniqueItemIds.length) {
        console.log(`错题本 ${book.name} 中发现重复的题目ID:`);
        const duplicateIds = itemIds.filter((id, index) => itemIds.indexOf(id) !== index);
        console.log(duplicateIds);
      }
    }
  });
} else {
  console.log('没有找到错题本数据');
}

// 检查红笔提取任务数据
const redPenTasks = localStorage.getItem('app_red_pen_tasks');
if (redPenTasks) {
  const parsedTasks = JSON.parse(redPenTasks);
  console.log('红笔提取任务数量:', parsedTasks.length);
  
  // 检查重复的ID
  const taskIds = parsedTasks.map(task => task.id);
  const uniqueTaskIds = [...new Set(taskIds)];
  
  if (taskIds.length !== uniqueTaskIds.length) {
    console.log('发现重复的红笔提取任务ID:');
    const duplicateIds = taskIds.filter((id, index) => taskIds.indexOf(id) !== index);
    console.log(duplicateIds);
  }
} else {
  console.log('没有找到红笔提取任务数据');
}

console.log('=== 检查完成 ===');