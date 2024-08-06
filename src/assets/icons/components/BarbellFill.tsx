import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBarbellFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#barbell-fill_svg__a)"><path fill="#000" d="M12.5 4v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8.5h-3V12a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3.5h3V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1m-10.25.5H2a1 1 0 0 0-1 1v2H.517A.51.51 0 0 0 0 7.967a.5.5 0 0 0 .5.533H1v2a1 1 0 0 0 1 1h.25a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25M16 7.967a.51.51 0 0 0-.515-.467H15v-2a1 1 0 0 0-1-1h-.25a.25.25 0 0 0-.25.25v6.5a.25.25 0 0 0 .25.25H14a1 1 0 0 0 1-1v-2h.5a.5.5 0 0 0 .5-.533" /></g><defs><clipPath id="barbell-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBarbellFill);
const Memo = memo(ForwardRef);
export default Memo;