// 링크드리스트
// 노드는 포인터를 가지고 있다, 리스트에 시작은 헤드, 끝은 테일(테일에 포인터는 null이다.)

// 노드
class Node {
  // 생성자
  constructor(data) {
    // data 는 흑연, 자갈 ,미가루 등등 실제 데이터
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  append(vlaue) {}
}

const linkedList = new LinkedList("흑연");
