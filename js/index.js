document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.querySelector(".submit-button");
  const textArea = document.querySelector("textarea");
  const commentList = document.querySelector(".comment-list");

  submitButton.addEventListener("click", function () {
    const commentText = textArea.value.trim();

    if (commentText === "") {
      alert("댓글을 입력하세요!");
      return;
    }

    // 새로운 댓글 요소 생성
    const newComment = document.createElement("li");
    newComment.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">${commentText}</div>
      </div>
    `;

    // 댓글 리스트에 추가
    commentList.appendChild(newComment);

    // 입력 필드 초기화
    textArea.value = "";
  });

  // 콘솔 메시지 출력
  console.log(
    "%c" +
      " __      __  ______   __  __   ______     " +
      "\n" +
      "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
      "\n" +
      "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
      "\n" +
      " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
      "\n" +
      "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
      "\n" +
      "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
      "\n" +
      "    '/__//__/  /_____/ \\/_/\\/_/ /_____/ ",
    "color: #d81b60; font-size: 16px; font-weight: bold;"
  );

  console.log("알맞은 스크립트를 작성하세요");
});
