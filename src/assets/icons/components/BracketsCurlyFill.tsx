import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBracketsCurlyFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#brackets-curly-fill_svg__a)"><path fill="#000" d="M13.5 2.5h-11a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-8 7.24c.018.891.026 1.26 1 1.26a.5.5 0 0 1 0 1c-1.954 0-1.982-1.402-2-2.24-.018-.891-.026-1.26-1-1.26a.5.5 0 1 1 0-1c.974 0 .982-.369 1-1.26.018-.838.046-2.24 2-2.24a.5.5 0 1 1 0 1c-.974 0-.982.369-1 1.26-.01.52-.026 1.256-.5 1.74.474.484.49 1.22.5 1.74m7-1.24c-.974 0-.982.369-1 1.26-.018.838-.046 2.24-2 2.24a.5.5 0 0 1 0-1c.974 0 .982-.369 1-1.26.01-.52.026-1.256.5-1.74-.475-.484-.49-1.22-.5-1.74-.018-.891-.026-1.26-1-1.26a.5.5 0 1 1 0-1c1.954 0 1.983 1.402 2 2.24.018.891.026 1.26 1 1.26a.5.5 0 0 1 0 1" /></g><defs><clipPath id="brackets-curly-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgBracketsCurlyFill);
const Memo = memo(ForwardRef);
export default Memo;