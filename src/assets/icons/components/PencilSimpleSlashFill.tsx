import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPencilSimpleSlashFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#pencil-simple-slash-fill_svg__a)"><path fill="#000" d="m14.208 4.585-2.794-2.792a1 1 0 0 0-1.414 0L7.228 4.565a.25.25 0 0 0-.01.345l3.671 4.038a.25.25 0 0 0 .362.008L14.208 6a1 1 0 0 0 0-1.415M12 6.793 9.208 4l1.5-1.5L13.5 5.293zm1.37 6.37a.499.499 0 0 1-.393.84.5.5 0 0 1-.347-.167l-2.98-3.279-3.15 3.15a1 1 0 0 1-.707.293H3a1 1 0 0 1-1-1v-2.793a1 1 0 0 1 .293-.707l3.35-3.35-3-3.301a.51.51 0 0 1-.024-.672.5.5 0 0 1 .75-.013z" /></g><defs><clipPath id="pencil-simple-slash-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgPencilSimpleSlashFill);
const Memo = memo(ForwardRef);
export default Memo;