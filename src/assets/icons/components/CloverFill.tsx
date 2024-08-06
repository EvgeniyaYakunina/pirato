import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCloverFill = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" ref={ref} {...props}><g clipPath="url(#clover-fill_svg__a)"><path fill="#000" d="M14.25 7.5c0 1.414-.375 2.295-1.12 2.617a1.7 1.7 0 0 1-.688.133 2.6 2.6 0 0 1-.525-.058.25.25 0 0 1-.158-.103 23 23 0 0 0-2.984-3.453.5.5 0 0 0-.687.726c.927.87 4.008 3.968 4.895 7.517a.5.5 0 0 1-.79.515.5.5 0 0 1-.177-.273c-.258-1.03-.729-2.03-1.28-2.943a1.6 1.6 0 0 1-.118.45c-.323.747-1.204 1.122-2.618 1.122s-2.295-.375-2.617-1.121c-.341-.787-.025-1.926.937-3.388q.064-.094.125-.188l-.187.125c-1.08.714-1.986 1.072-2.702 1.072a1.7 1.7 0 0 1-.688-.133C2.125 9.795 1.75 8.914 1.75 7.5s.375-2.295 1.12-2.617c.788-.341 1.928-.025 3.39.937l.187.125-.125-.187c-.963-1.462-1.28-2.602-.938-3.39C5.705 1.626 6.586 1.25 8 1.25s2.295.375 2.617 1.12c.341.788.025 1.928-.937 3.39q-.062.095-.125.187l.188-.125c1.461-.963 2.601-1.28 3.388-.938.744.321 1.119 1.202 1.119 2.616" /></g><defs><clipPath id="clover-fill_svg__a"><path fill="currentcolor" d="M0 0h16v16H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(SvgCloverFill);
const Memo = memo(ForwardRef);
export default Memo;