import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDevToLogoFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#dev-to-logo-fill_svg__a)"><path fill="#000" d="M5 7.5v1a1 1 0 0 1-1 1v-3a1 1 0 0 1 1 1m10.5-3v7a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1M6 7.5a2 2 0 0 0-2-2h-.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5H4a2 2 0 0 0 2-2zm2 0v-1h1a.5.5 0 1 0 0-1H7.5A.5.5 0 0 0 7 6v4a.5.5 0 0 0 .5.5H9a.5.5 0 0 0 0-1H8v-1h.5a.5.5 0 1 0 0-1zm5.136-1.981a.5.5 0 0 0-.617.345l-.644 2.29-.644-2.29a.5.5 0 0 0-.962.272l1.125 4a.5.5 0 0 0 .962 0l1.125-4a.5.5 0 0 0-.345-.617" /></g><defs><clipPath id="dev-to-logo-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgDevToLogoFill);
const Memo = memo(ForwardRef);
export default Memo;