// intersection types
type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credentials: string;
}

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

//------------------------------------------------------------------
// alternative appraoch using interfaces

interface FileDataCopy {
  path: string;
  content: string;
};

interface DatabaseDataCopy {
  connectionUrl: string;
  credentials: string;
}

interface StatusCopy {
  isOpen: boolean;
  errorMessage?: string;
};

interface AccessedFileDataCopy extends FileDataCopy, StatusCopy { };
interface AccessedDatabaseDataCopy extends DatabaseDataCopy, StatusCopy { };

