import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgIdentificationBadgeFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#identification-badge-fill_svg__a)"><path fill="#000" d="M12.5 1.5h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M6 3h4a.5.5 0 0 1 0 1H6a.5.5 0 1 1 0-1m5.3 9.4a.5.5 0 0 1-.7-.1 3.25 3.25 0 0 0-5.2 0 .5.5 0 1 1-.8-.6 4.24 4.24 0 0 1 1.713-1.356 2.5 2.5 0 1 1 3.37 0c.681.295 1.273.762 1.717 1.356a.5.5 0 0 1-.1.7M9.5 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" /></g><defs><clipPath id="identification-badge-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgIdentificationBadgeFill);
const Memo = memo(ForwardRef);
export default Memo;