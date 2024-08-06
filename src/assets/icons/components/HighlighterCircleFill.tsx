import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHighlighterCircleFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#highlighter-circle-fill_svg__a)"><path fill="#000" d="M12.596 3.404a6.5 6.5 0 1 0-9.192 9.192 6.5 6.5 0 0 0 9.192-9.192M6 13.125V9.5h4v3.625a5.52 5.52 0 0 1-4 0m5.889-1.236q-.406.407-.889.722V9.5a1 1 0 0 0-1-1v-4a.5.5 0 0 0-.724-.448l-3 1.5A.5.5 0 0 0 6 6v2.5a1 1 0 0 0-1 1v3.11a5.5 5.5 0 1 1 6.889-.721" /></g><defs><clipPath id="highlighter-circle-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgHighlighterCircleFill);
const Memo = memo(ForwardRef);
export default Memo;