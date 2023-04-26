export function browserSignature() {
  const windowObj = window || global;

  // Count Browser window object keys
  const windowObjCount = () => {
    const keys = [];
    for (let i in windowObj) {
      keys.push(i);
    }
    return keys.length.toString(36);
  };
  // window obj and navigator aggregate
  const pad = (str: string, size: number) => {
    return (new Array(size + 1).join('0') + str).slice(-size);
  };

  // Browser mimiTypes and User Agent count
  // const navi = (navigator.mimeTypes.length + navigator.userAgent.length).toString(36);
  const navi = navigator.userAgent.length.toString(36);
  const padString = pad(navi + windowObjCount(), 4);
  // Browser screen specific properties
  const width = windowObj.screen.width.toString(36);
  const height = windowObj.screen.height.toString(36);
  const availWidth = windowObj.screen.availWidth.toString(36);
  const availHeight = windowObj.screen.availHeight.toString(36);
  const colorDepth = windowObj.screen.colorDepth.toString(36);
  const pixelDepth = windowObj.screen.pixelDepth.toString(36);

  // Base64 encode
  return windowObj.btoa(
    padString +
      width +
      height +
      availWidth +
      availHeight +
      colorDepth +
      pixelDepth,
  );
}
