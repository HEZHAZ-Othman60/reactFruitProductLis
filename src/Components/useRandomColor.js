import useRandomColor from './useRandomColor';

function useRandomColor() {


    const { color, changeColor } = useRandomColor();

	return (
        <div
            style={{ width: '100vw', height: '100vw', backgroundColor: '#' + color }}>
			<button
				onClick={() => {
                    changeColor();
                }}
			>
				Change Color
			</button>
		</div>
	);
}
export default useRandomColor;
