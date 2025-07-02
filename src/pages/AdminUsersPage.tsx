import { useRef, useState } from "react";
import { CrossIcon, DeleteIcon, EditIcon, TickIcon } from "../assets/icons";
import type { UserType } from "../assets/testData";

const AdminUsersPage = () => {
  const initState: UserType[] = [
    {
      _id: "6849d43c84b146931",
      username: "heshmat",
      email: "heshmat@mail.com",
      isAdmin: true,
    },
    {
      _id: "6849d43c84b146923",
      username: "heshmat",
      email: "heshmat@mail.com",
      isAdmin: false,
    },
    {
      _id: "6849d43c84b146933",
      username: "heshmat",
      email: "heshmat@mail.com",
      isAdmin: false,
    },
  ];
  const [users, setUsers] = useState(initState);

  const handleDelete = (_id: string) => {
    setUsers((users) => users.filter((user) => user._id !== _id));
  };
  const handdleUpdate: (_id: string, prop: string, value: string) => void = (
    _id,
    prop,
    value,
  ) => {
    setUsers((user) =>
      user.map((user) =>
        user._id === _id ? { ...user, [prop]: value } : user,
      ),
    );
  };

  return (
    <section className="mx-20 my-15">
      <table className="table table-fixed">
        <thead>
          <tr>
            <th>ID</th>
            <th>نام</th>
            <th>ایمیل</th>
            <th className="text-center">ادمین</th>
            <th className="text-end">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={5}>هیچ کاربری یافت نشد</td>
            </tr>
          )}
          {users.map((user) => (
            <UserTableRow
              user={user}
              key={user._id}
              onDelete={handleDelete}
              onUpdate={handdleUpdate}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};
const UserTableRow = ({
  user,
  onDelete,
  onUpdate,
}: {
  user: UserType;
  onDelete: (_id: string) => void;
  onUpdate: (_id: string, prop: string, value: string) => void;
}) => {
  const [usernameEditing, setUsernameEditing] = useState(false);
  const [emailEditing, setEmailEditing] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleUsernameEdit = () => {
    if (!usernameEditing) return setUsernameEditing(true);

    onUpdate(user._id, "username", usernameRef.current!.value);
    setUsernameEditing(false);
  };
  const handleEmailEdit = () => {
    if (!emailEditing) return setEmailEditing(true);

    onUpdate(user._id, "email", emailRef.current!.value);
    setEmailEditing(false);
  };

  return (
    <tr key={user._id} className="border-0">
      <td>{user._id}</td>
      <EditableTableData
        value={user.username}
        editState={usernameEditing}
        ref={usernameRef}
        onEdit={handleUsernameEdit}
      />
      <EditableTableData
        value={user.email}
        editState={emailEditing}
        ref={emailRef}
        onEdit={handleEmailEdit}
      />
      <td className="text-center">
        <div className="flex justify-center">
          {user.isAdmin ? <TickIcon /> : <CrossIcon />}
        </div>
      </td>
      <td className="text-end">
        <button
          className="btn h-8 w-8 bg-[#B71D18] p-0"
          onClick={() => onDelete(user._id)}
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

const EditableTableData = ({
  value,
  editState,
  ref,
  onEdit,
}: {
  value: string;
  editState: boolean;
  ref: React.RefObject<HTMLInputElement | null>;
  onEdit: () => void;
}) => {
  return (
    <td className="space-x-2">
      <div className="flex items-center gap-2">
        <button className="cursor-pointer" onClick={onEdit}>
          {editState ? (
            <div className="btn h-8 w-8 bg-[#00B8D9] p-0 text-white">✔︎</div>
          ) : (
            <EditIcon />
          )}
        </button>
        {editState ? (
          <input
            className="input h-8 focus:outline-0"
            type="text"
            defaultValue={value}
            ref={ref}
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
    </td>
  );
};

export default AdminUsersPage;
