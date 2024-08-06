import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVoicemailFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#voicemail-fill_svg__a)"><path fill="#000" d="M12.5 4.5a3.5 3.5 0 0 0-2.446 6H5.946a3.5 3.5 0 1 0-2.446 1h9a3.5 3.5 0 1 0 0-7m-9 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m9 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M14 8A1.5 1.5 0 1 1 11 8 1.5 1.5 0 0 1 14 8M5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" /></g><defs><clipPath id="voicemail-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgVoicemailFill);
const Memo = memo(ForwardRef);
export default Memo;