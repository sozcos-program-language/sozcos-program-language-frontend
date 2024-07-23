/**
 * alert 弹窗
 * @param content
 */
function myAlert(content) {
    alert(content)
}

/**
 * 带标题以及内容弹窗
 * @param content
 */
function myPrompt(content) {
    // 文本,  input 框的初始值, 返回用户输入的值
    let age = prompt('How old are you?', 100);

    alert(`You are ${age} years old!`);
}
/**
 * 带标题以及内容弹窗
 * @param content
 */
function myConfirm(content) {
    let isBoss = confirm("Are you the boss?");

    alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
}