import { useState, useEffect } from 'react';

export const useAdmin = (connection, id) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
        connection.invoke("CheckAdminStatus", id)
        .then((result) => {
            setIsAdmin(result);
        })
        .catch((error) => {
            console.error("Erreur de la vérification du status admin.", error);
        });
    }

    if (connection) {
      checkAdminStatus();
    }
    else {
        console.log("No connection found for the admin");
    }

    return () => {
    // Nettoyage si nécessaire.
    };

  }, [connection, id]);

  return isAdmin;
};