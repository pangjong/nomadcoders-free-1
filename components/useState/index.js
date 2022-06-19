// export { default as UseInput } from './UseInput';
// export { default as UseState } from './UseState';
// export { default as UseTabs } from './UseTabs';

import UseInput from "./UseInput";
import UseState from "./UseState";
import UseTabs from "./UseTabs";

// react 작성규칙을 지켜야 하는데 이런거말고 기본 index를 사용하는 방법이 있었는데 좀더 찾아봐
function useState() {
  return (
    <>
      <UseInput />
      <UseState />
      <UseTabs />
    </>
  );
}

export default useState;