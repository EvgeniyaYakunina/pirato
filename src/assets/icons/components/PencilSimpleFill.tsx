import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPencilSimpleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pencil-simple-fill_svg__a)"><path fill="#000" d="m14.207 4.586-2.793-2.794a1 1 0 0 0-1.414 0L2.293 9.5a1 1 0 0 0-.293.707V13a1 1 0 0 0 1 1h2.793a1 1 0 0 0 .707-.293L14.207 6a1 1 0 0 0 0-1.414M12 6.792 9.207 4l1.5-1.5L13.5 5.292z" /></g><defs><clipPath id="pencil-simple-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPencilSimpleFill);
const Memo = memo(ForwardRef);
export default Memo;