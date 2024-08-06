import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSolarPanelFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#solar-panel-fill_svg__a)"><path fill="#000" d="M2 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m2.464-2.828a.5.5 0 0 0 .708-.708l-.708-.707a.5.5 0 0 0-.707.707zM8 2.5a.5.5 0 0 0 .5-.5V1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 .5.5m3.182 1.318a.5.5 0 0 0 .354-.146l.707-.708a.5.5 0 0 0-.707-.707l-.708.707a.5.5 0 0 0 .354.854M12 6.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-.5.5M5.5 7a.5.5 0 0 0 .5-.5 2 2 0 1 1 4 0 .5.5 0 1 0 1 0 3 3 0 0 0-6 0 .5.5 0 0 0 .5.5m3.45 1.5h-1.9a.25.25 0 0 0-.244.197L6.414 10.5h3.172l-.392-1.803A.25.25 0 0 0 8.95 8.5m-6.966 3.125-.922 1.629A.5.5 0 0 0 1.51 14h2.918a.25.25 0 0 0 .244-.197l.5-2.303h-2.97a.25.25 0 0 0-.218.125m12.951 1.625-.92-1.625a.25.25 0 0 0-.217-.125h-2.971l.5 2.303a.25.25 0 0 0 .244.197h2.914a.51.51 0 0 0 .375-.156.5.5 0 0 0 .078-.59zm-1.767-3.125-.776-1.375a.5.5 0 0 0-.438-.254h-1.469a.25.25 0 0 0-.244.303l.368 1.697h2.341a.25.25 0 0 0 .218-.371M5.515 8.5H4.044a.5.5 0 0 0-.438.254l-.774 1.371a.25.25 0 0 0 .218.375h2.34l.37-1.697a.25.25 0 0 0-.245-.303m4.289 3H6.196l-.477 2.197a.25.25 0 0 0 .244.303h4.074a.25.25 0 0 0 .244-.303z" /></g><defs><clipPath id="solar-panel-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgSolarPanelFill);
const Memo = memo(ForwardRef);
export default Memo;