const getArgs = (): string[] | undefined => {
    const args = process.argv.slice(2);

    if (args.length) {
        return args;
    }

    return undefined;
};

const forEach = <T = any>(array: T[], callback: (value: T) => void) => {
    array.forEach((value) => callback(value));
};

const main = () => {
    const args = getArgs();
    if (args) {
        forEach(args, console.log);
    } else {
        console.log("Аргументы не были переданы");
    }
};

main();