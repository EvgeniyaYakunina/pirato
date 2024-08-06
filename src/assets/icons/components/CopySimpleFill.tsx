import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCopySimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#copy-simple-fill_svg__a)"><path fill="#000" d="M12 4.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5M13.5 2h-9a.5.5 0 1 0 0 1H13v8.5a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5" /></g><defs><clipPath id="copy-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCopySimpleFill);
const Memo = memo(ForwardRef);
export default Memo;