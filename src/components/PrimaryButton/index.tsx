type Props = {
    buttonTitle: string;
};

const PrimaryButton = ({ buttonTitle }: Props) => {
    return (
        <button id="primary-button" type="submit" className="btn btn-primary text-white">
            {buttonTitle}
        </button>
    );
}

export default PrimaryButton;