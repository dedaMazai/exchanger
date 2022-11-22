export const ErrorPage = () => {

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className="ErrorPage">
            <p>Произошла непредвиденная ошибка</p>
            <button onClick={reloadPage}>
                Обновить страницу
            </button>
        </div>
    );
};
